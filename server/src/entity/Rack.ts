import {
    Column,
    Entity,
    ManyToOne, OneToOne,
    PrimaryGeneratedColumn
} from "typeorm";
import { IRack } from "../bridge/Interfaces/rack.interface";
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
