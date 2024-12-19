import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { IRack } from "../bridge/Interfaces/rack.interface";
import { Product } from "./Product";
import { Ray } from "./Ray";
import { ProductCategory } from "./ProductCategory";
import { IProductCategory } from "../bridge/Interfaces/product-category.interface";

@Entity()
export class Rack implements IRack {
  @PrimaryColumn()
  rackId: number;

  @Column({ type: "int", select: true })
  rackNumber: number;

  @Column("json")
  coordonates: number[][];

  @OneToOne(() => ProductCategory)
  @JoinColumn()
  category: ProductCategory;

  @OneToOne(() => Product)
  @JoinColumn()
  products: Product;

  @OneToMany(() => Ray, (ray) => ray.rayId)
  rays: Ray[];

  @Column({ type: "int", select: false })
  maxCapacity: number;
}
