import { FindOptionsWhere, Repository } from "typeorm";
import { CRUD } from "../bridge/Interfaces/crud.interface";
import { Product } from "../entity/Product";
import { dataSource } from "../dataSource";
import { IProduct } from "../bridge/Interfaces/product.interface";
import { listCount } from "../bridge/models/find.model";
import { ProductListFilter } from "../bridge/models/product-list-filter.model";
import { FilterOption } from "../helper/filter-options.helper";
import { FindOptionsHelper } from "../helper/find-options.helper";
import { ListElements } from "../bridge/models/list-Element.model";

export class ProductService implements CRUD<Product> {
  private productRepository: Repository<Product>;
  private findOptions: FindOptionsHelper;

  constructor() {
    this.productRepository = dataSource.getRepository(Product);
    this.findOptions = new FindOptionsHelper();
  }

  async list(take: number, number: number): Promise<listCount<Product>> {
    const skip: number = (number - 1) * take;
    const [datas, num]: [Product[], number] = await this.productRepository.findAndCount({
      take: take,
      skip: skip,
    });
    return {
      list: datas,
      count: num,
    };
  }

  async listFiltered(take: number, page: number, filterOptions: ProductListFilter): Promise<ListElements<Product>> {
    const filterOption = new FilterOption();
    const skip = (page - 1) * take;
    const orderPrams: { key: string; value: any } = {
      key: filterOptions.sortBy,
      value: filterOptions.sort,
    };
    const allFilterOptions = filterOption.productFilter(filterOptions);
    const whereParams: FindOptionsWhere<Product>[] = this.findOptions.buildWhere<Product>(allFilterOptions.filterOrArray, allFilterOptions.filterAndArray, allFilterOptions.filterRelations[0]);

    const [products, quantity]: [Product[], number] = await this.productRepository.findAndCount({ where: whereParams });

    return {
      list: products,
      quantity: quantity,
    };
  }

  async create(resources: IProduct): Promise<any> {
    const product: Product | null = await this.read(resources.ProductId);
    if (product) throw new Error("The ID for this product is already used.");

    return this.productRepository.insert(resources);
  }

  async read(key: any): Promise<Product | null> {
    const product: Product | null = await this.productRepository.findOne({ where: { ProductId: key } });
    return product;
  }

  async update(key: any, resources: IProduct): Promise<boolean> {
    const product: Product | null = await this.read(key);
    if (!product) throw new Error("The Product is not found in the database");

    return (await this.productRepository.update({ ProductId: key }, resources)).affected ? true : false;
  }

  async delete(key: any): Promise<boolean> {
    const product: Product | null = await this.read(key);
    if (!product) throw new Error("The Produuct is not found in the database");

    return (await this.productRepository.delete({ ProductId: key })).affected ? true : false;
  }
}
