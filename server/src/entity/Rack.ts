import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { IRack } from "../bridge/Interfaces/rack.interface";
import { IProduct } from "../bridge/Interfaces/product.interface";
import { Product } from "./Product";
import { Ray } from "./Ray";

@Entity()
export class Rack implements IRack {
  @PrimaryGeneratedColumn("increment")
  rackId: number;

  @Column({ type: "int", select: true })
  rackNumber: number;

  @OneToOne(() => Product)
  products: Product;

  @ManyToOne(() => Ray, (ray) => ray.rayId)
  rays: Ray[];

  @Column({ type: "int", select: false })
  maxCapacity: number;
}
