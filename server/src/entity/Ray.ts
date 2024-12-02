import {
    Column,
    Entity, OneToMany, PrimaryGeneratedColumn
} from "typeorm";
import { IRay } from "../bridge/Interfaces/ray.interface";
import { Product } from "./Product";
import { Rack } from "./Rack";

@Entity()
export class Ray implements IRay {
  @PrimaryGeneratedColumn("increment")
  rayId: number;

  @Column({ type: "varchar", length: 30, select: true })
  rayName: string;

  @OneToMany(() => Rack, (rack) => rack.rackId)
  rack: Rack;

  @OneToMany(() => Product, (product) => product.ProductId)
  assiocetedProduct: Product[];
}
