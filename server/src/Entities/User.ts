import { Column, Entity, PrimaryColumn } from "typeorm";
import IUser from "../bridge/Interfaces/user.Interface";

@Entity()
export class User implements IUser {
  @PrimaryColumn()
  Email: string;
  @Column({ type: "varchar", length: 20, select: true })
  Name: string;
  @Column({ type: "varchar", length: 20, select: false })
  Password: string;
  @Column({ type: "string", length: 20, select: true })
  Phonenumber: string;
  @Column({ type: "string", length: 25, select: true })
  Address: string;
  @Column({ type: "string", length: 15, select: true })
  Role: string;
}
