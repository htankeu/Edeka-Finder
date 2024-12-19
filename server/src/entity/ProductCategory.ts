import { Column, Entity, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { IProductCategory } from "../bridge/Interfaces/product-category.interface";
import { Product } from "./Product";
import { IRack } from "../bridge/Interfaces/rack.interface";
import { Rack } from "./Rack";

@Entity()
export class ProductCategory implements IProductCategory {
  @PrimaryColumn()
  CategoryId: number;

  @Column({ type: "varchar", length: 25, select: true })
  Category: string;

  @OneToOne(() => Rack)
  rack: IRack;

  @OneToMany(() => Product, (product) => product.ProductId)
  ProductList: Product[];
}
