import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { IProduct } from "../bridge/Interfaces/product.interface";
import { IProductCategory } from "../bridge/Interfaces/product-category.interface";
import { IRack } from "../bridge/Interfaces/rack.interface";
import { IRay } from "../bridge/Interfaces/ray.interface";
import { ProductCategory } from "./ProductCategory";
import { Ray } from "./Ray";
import { Rack } from "./Rack";

@Entity()
export class Product implements IProduct {
  @PrimaryGeneratedColumn("increment")
  ProductId: number;

  @Column({ type: "text", select: true })
  Description: string;

  @Column({ type: "varchar", length: 20, select: true })
  ProductName: string;

  @Column({ type: "varchar", length: 20, select: false })
  BarCode: string;
  
  @Column({ type: "bytea" })
  image?: Buffer<ArrayBufferLike>;

  @ManyToOne(() => ProductCategory, (productCategory) => productCategory.CategoryId)
  Category: ProductCategory;

  @ManyToOne(() => Ray, (ray) => ray.rayId)
  ray: Ray;

  @OneToOne(() => Rack)
  @JoinColumn()
  rack: Rack;

  @Column({ type: "int", select: true })
  Quantity: number;
}
