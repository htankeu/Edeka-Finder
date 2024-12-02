import {
    Column,
    Entity, OneToMany,
    PrimaryGeneratedColumn
} from "typeorm";
import { IProductCategory } from "../bridge/Interfaces/product-category.interface";
import { Product } from "./Product";

@Entity()
export class ProductCategory implements IProductCategory {
  @PrimaryGeneratedColumn("increment")
  CategoryId: number;

  @Column({ type: "varchar", length: 25, select: true })
  Name: string;

  @OneToMany(() => Product, (product) => product.ProductId)
  ProductList: Product[];

  @Column({ type: "int" })
  Quantity: number;
}
