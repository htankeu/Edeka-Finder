import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { IProductCategory } from "../bridge/Interfaces/product-category.interface";
import { Product } from "./Product";

@Entity()
export class ProductCategory implements IProductCategory {
  @PrimaryColumn()
  CategoryId: number;

  @Column({ type: "varchar", length: 25, select: true })
  Name: string;

  @OneToMany(() => Product, (product) => product.ProductId)
  ProductList: Product[];
}
