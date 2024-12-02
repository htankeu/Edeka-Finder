import { Column, Entity, PrimaryColumn } from "typeorm";
import IUser from "../bridge/Interfaces/user.Interface";

@Entity()
export class User implements IUser {
  @PrimaryColumn()
  Email!: string;
  @Column("varchar", { length: 32 })
  Name!: string;
  @Column("varchar", { length: 20 })
  Password!: string;
  @Column("string", { length: 10 })
  Phonenumber!: string;
  @Column("string", { length: 30 })
  Address!: string;
  @Column("string")
  Role!: string;
}
