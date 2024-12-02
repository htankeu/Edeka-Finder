import { Column, Entity, OneToOne, PrimaryColumn } from "typeorm";
import IUser from "../bridge/Interfaces/user.Interface";
import { Sesson } from "./Session";

@Entity()
export class User implements IUser {
  @PrimaryColumn()
  Email: string;

  @Column({ type: "varchar", length: 20, select: true })
  Name: string;

  @Column({ type: "varchar", length: 20, select: false })
  Password: string;

  @Column({ type: "varchar", length: 20, select: true })
  Phonenumber: string;

  @Column({ type: "varchar", length: 25, select: true })
  Address: string;

  @Column({ type: "varchar", length: 15, select: true })
  Role: string;

  @OneToOne(() => Sesson, (sesson) => sesson.sessionId)
  SessionId: string;
}
