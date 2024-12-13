import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ISession } from "../bridge/Interfaces/session.interface";
import { User } from "./User";

@Entity()
export class Sesson implements ISession {
  @PrimaryGeneratedColumn("uuid")
  userMail: string;

  @OneToOne(() => User, (user) => user.Email)
  TokenId: string;

  @Column({ type: "uuid" })
  sessionId: string;

  @Column({ type: "int" })
  CreatedAt: BigInt;
}
