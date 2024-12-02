import bcrypt from "bcrypt";
import IUser from "../bridge/Interfaces/user.Interface";
import { Secret, SignOptions } from "jsonwebtoken";
import dotenv from "dotenv";
import { UserService } from "./user.services";

dotenv.config();

export class AuthService {
  private accesTokenOptions: SignOptions;
  private refreshTokenOptions: SignOptions;
  private saltRound: string | number;
  private privatKey: Secret;
  private publicKey: Secret;
  private userService: UserService;

  constructor() {
    this.accesTokenOptions = {
      algorithm: "RS384",
      expiresIn: "5m",
    };

    this.refreshTokenOptions = {
      algorithm: "RS384",
      expiresIn: "5h",
    };

    this.privatKey = process.env.ACCESS_TOKEN || "";
    this.publicKey = process.env.REFRESH_TOKEN || "";
    this.userService = new UserService();
  }

  register(user: IUser) {}

  private async hashWord(word: string, saltRound: string | number): Promise<string> {
    return await bcrypt.hash(word, saltRound);
  }
}
