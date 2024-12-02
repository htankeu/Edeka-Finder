import { Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ISession } from "../bridge/Interfaces/session.interface";
import { User } from "./User";

@Entity()
export class Sesson implements ISession {
  @PrimaryGeneratedColumn("uuid")
  sessionId: number;

  @OneToOne(() => User, (user) => user.Email)
  userMail: string;
}
