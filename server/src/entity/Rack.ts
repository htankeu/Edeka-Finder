import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { IRack } from "../bridge/Interfaces/rack.interface";
import { Product } from "./Product";
import { Ray } from "./Ray";

@Entity()
export class Rack implements IRack {
  @PrimaryColumn()
  rackId: number;

  @Column({ type: "int", select: true })
  rackNumber: number;

  @Column("json")
  coordonates: number[][];

  @OneToOne(() => Product)
  products: Product;

  @OneToMany(() => Ray, (ray) => ray.rayId)
  rays: Ray[];

  @Column({ type: "int", select: false })
  maxCapacity: number;
}
