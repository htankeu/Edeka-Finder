import bcrypt from "bcrypt";
import IUser from "../bridge/Interfaces/user.Interface";
import jwt, { Secret, SignOptions } from "jsonwebtoken";
import dotenv from "dotenv";
import { UserService } from "./user.services";
import { ParseError } from "../helper/parseError";
import { Repository } from "typeorm";
import { User } from "../entity/User";
import { dataSource } from "../dataSource";
import { ErrorType } from "../bridge/enum/errorType";
import { ROLE } from "../bridge/enum/roles.enum";
import { uuid } from "uuidv4";
import { AuthPayload } from "../bridge/models/auth-payload.model";
import { Sesson } from "../entity/Session";

dotenv.config();

export class AuthService {
  private accesTokenOptions: SignOptions;
  private refreshTokenOptions: SignOptions;
  private saltRound: string | number;
  private privatKey: Secret;
  private publicKey: Secret;
  private userRepository: Repository<User>;
  private userService: UserService;
  private sessionRepository: Repository<Sesson>;

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

  async register(user: IUser): Promise<User> {
    try {
      // check if user already exist
      const checkMail: User | null = await this.userRepository.findOne({ where: { Email: user.Email } });
      if (checkMail) throw ErrorType.EmailAlreadyTaken;

      const hashedPassword: string = await this.hashWord(user.Password, this.saltRound);

      const newUser = new User();
      newUser.Address = user.Address;
      newUser.Email = user.Email;
      newUser.Name = user.Name;
      newUser.Password = hashedPassword;
      newUser.Phonenumber = user.Phonenumber;
      newUser.Role = ROLE.USER;

      const registerdUser: User = await this.userService.create(newUser);

      return registerdUser;
    } catch (error) {
      throw ParseError.errorToParse(error);
    }
  }

  async logIn(userIdentifer: string, password: string): Promise<AuthPayload> {
    const sessionId: string = uuid();
    // check first if the user exist
    const user: User | null = await this.userRepository.findOne({ where: [{ Email: userIdentifer }] });
    if (!user) throw new Error(ErrorType.NoInDatabase);

    if (!userIdentifer || !password) throw new Error(ErrorType.WrongCredentials);

    //Compare the entered password with the hashed password saved in the database
    const compareCrypt: boolean = await bcrypt.compare(password, user.Password);
    if (!compareCrypt) throw new Error(ErrorType.WrongCredentials);

    //Remove the user's password into our new variable, for using it safe in payload
    const userWithoutPassword: IUser = {
      Name: user.Name,
      Email: user.Email,
      Password: "",
      Phonenumber: user.Phonenumber,
      Address: user.Address,
      SessionId: sessionId,
    };

    const authPayload: AuthPayload = await this.generateTokenPair(userWithoutPassword, sessionId);

    return authPayload;
  }

  private async hashWord(word: string, saltRound: string | number): Promise<string> {
    return await bcrypt.hash(word, saltRound);
  }

  private async generateAccesToken(user: IUser): Promise<string> {
    return await jwt.sign(user, this.publicKey, this.accesTokenOptions);
  }

  private async generateRefrehToken(user: IUser): Promise<string> {
    return await jwt.sign(user, this.privatKey, this.refreshTokenOptions);
  }

  private async generateTokenPair(user: IUser, sessionId: string): Promise<AuthPayload> {
    const tokenId: string = uuid();
    user.tokenId = tokenId;
    const accesToken: string = await this.generateAccesToken(user);
    const refreshToken: string = await this.generateRefrehToken(user);

    const sessionObj: Sesson = {
      userMail: user.Email,
      sessionId: sessionId,
      TokenId: tokenId,
      CreatedAt: BigInt(Date.now()),
    };

    this.sessionRepository.insert(sessionObj);

    return { accesToken, refreshToken };
  }
}
