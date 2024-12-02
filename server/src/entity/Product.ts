import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IProduct } from "../bridge/Interfaces/product.interface";
import { IProductCategory } from "../bridge/Interfaces/product-category.interface";
import { IRack } from "../bridge/Interfaces/rack.interface";
import { IRay } from "../bridge/Interfaces/ray.interface";

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

  Category: IProductCategory;

  ray: IRay;

  rack: IRack;

  @Column({ type: "int", select: true })
  Quantity: number;
}
