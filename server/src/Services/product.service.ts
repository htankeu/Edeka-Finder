import { Repository } from "typeorm";
import { CRUD } from "../bridge/Interfaces/crud.interface";
import { Product } from "../entity/Product";
import { dataSource } from "../dataSource";
import { IProduct } from "../bridge/Interfaces/product.interface";

export class productService implements CRUD<Product> {
  private productRepository: Repository<Product>;

  constructor() {
    this.productRepository = dataSource.getRepository(Product);
  }

  list(take: number, number: number): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async create(resources: IProduct): Promise<Product> {
    const product: Product | null = await this.read(resources.ProductId);
    if (product) throw new Error("The ID for this product is already used.");

    return this.productRepository.create(resources);
  }

  async read(key: any): Promise<any> {
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
