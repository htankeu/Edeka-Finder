import bcrypt from "bcrypt";
import IUser from "../bridge/Interfaces/user.Interface";
import { Secret, SignOptions } from "jsonwebtoken";
import dotenv from "dotenv";
import { UserService } from "./user.services";
import { ParseError } from "../helper/parseError";
import { Repository } from "typeorm";
import { User } from "../entity/User";
import { dataSource } from "../dataSource";
import { ErrorType } from "../bridge/enum/errorType";
import { ROLE } from "../bridge/enum/roles.enum";

dotenv.config();

export class AuthService {
  private accesTokenOptions: SignOptions;
  private refreshTokenOptions: SignOptions;
  private saltRound: string | number;
  private privatKey: Secret;
  private publicKey: Secret;
  private userRepository: Repository<User>;
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

    this.saltRound = 11;
    this.privatKey = process.env.ACCESS_TOKEN || "";
    this.publicKey = process.env.REFRESH_TOKEN || "";
    this.userRepository = dataSource.getRepository(User);
    this.userService = new UserService();
  }

  async register(user: IUser): Promise<string | undefined | ErrorType> {
    try {
      // check if user already exist
      const checkMail: User | null = await this.userRepository.findOne({ where: { Email: user.Email } });
      if (checkMail) return ErrorType.EmailAlreadyTaken;

      const hashedPassword: string = await this.hashWord(user.Password, this.saltRound);

      const newUser = new User();
      newUser.Address = user.Address;
      newUser.Email = user.Email;
      newUser.Name = user.Name;
      newUser.Password = hashedPassword;
      newUser.Phonenumber = user.Phonenumber;
      newUser.Role = ROLE.USER;

      this.userService.create(newUser);
    } catch (error) {
      return ParseError.errorToParse(error);
    }
  }

  private async hashWord(word: string, saltRound: string | number): Promise<string> {
    return await bcrypt.hash(word, saltRound);
  }
}
