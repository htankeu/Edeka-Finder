import { Repository } from "typeorm";
import { CRUD } from "../bridge/Interfaces/crud.interface";
import { ProductCategory } from "../entity/ProductCategory";
import { dataSource } from "../dataSource";
import { listCount } from "../bridge/models/find.model";
import { IProductCategory } from "../bridge/Interfaces/product-category.interface";

export class CategoryService implements CRUD<ProductCategory> {
  private categoryRepository: Repository<ProductCategory>;

  constructor() {
    this.categoryRepository = dataSource.getRepository(ProductCategory);
  }

  async list(take: number, number: number): Promise<listCount<ProductCategory>> {
    const skip = (number - 1) * take;
    const [categories, numOfCategory]: [ProductCategory[], number] = await this.categoryRepository.findAndCount({
      skip: skip,
      take: take,
    });

    return {
      list: categories,
      count: numOfCategory,
    };
  }

  async create(resources: IProductCategory): Promise<ProductCategory> {
    const category: ProductCategory | null = await this.read(resources.CategoryId);
    if (!category) throw Error("The ID is already used by another category");

    return this.categoryRepository.create(resources);
  }

  async read(key: any): Promise<ProductCategory | null> {
    const category: ProductCategory | null = await this.categoryRepository.findOne({ where: { CategoryId: key } });

    return category;
  }

  async update(key: any, resources: IProductCategory): Promise<boolean> {
    const category: ProductCategory | null = await this.read(key);
    if (!category) throw Error("No Category with this ID exist in the database");

    return (await this.categoryRepository.update({ CategoryId: key }, resources)).affected ? true : false;
  }
  
  async delete(key: any): Promise<boolean> {
    const category: ProductCategory | null = await this.read(key);
    if (!category) throw Error("No Category with this ID exist in the database");

    return (await this.categoryRepository.delete({ CategoryId: key })).affected ? true : false;
  }
}
