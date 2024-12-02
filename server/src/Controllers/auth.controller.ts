import { RequestHandler, Request, Response } from "express";
import IUser from "../bridge/Interfaces/user.Interface";
import { ParseError } from "../helper/parseError";
import { HttpStatus } from "../bridge/enum/http-status.enum";
import { AuthService } from "../Services/auth.service";
import { ValidationHelper } from "../helper/validation-helper";
import { ErrorType } from "../bridge/enum/errorType";
import { error } from "console";
import { User } from "../entity/User";

export const postLogin: RequestHandler = (req: Request, res: Response) => {
  try {
    const { identifier, password } = req.body;
    const authService: AuthService = new AuthService();
  } catch (error) {
    const err = ParseError.errorToParse(error);
    console.error(`We have an Error : ${err}`);
    res.status(HttpStatus.BAD_GATEWAY).json({ error: err });
  }
};

export const register: RequestHandler = async (req: Request, res: Response) => {
  try {
    const user = req.body as IUser;
    const checkProperties: string[] = ["Email", "Address", "Name", "Password", "Phonenumber"];
    if (ValidationHelper.checkPropertiesNullOrEmpty(user, checkProperties)) {
      console.error(`${ErrorType.IncompleteInformation}`);
      res.status(HttpStatus.NO_CONTENT).json({ error: ErrorType.IncompleteInformation });
      return;
    }
    const authService: AuthService = new AuthService();
    const result: User = await authService.register(user);

    res.json(HttpStatus.OK).json(result);
  } catch (error) {
    const err = ParseError.errorToParse(error);
    console.error(`We have an Error : ${err}`);
    res.status(HttpStatus.BAD_REQUEST).json({ error: err });
  }
};
