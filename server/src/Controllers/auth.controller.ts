import { RequestHandler, Request, Response } from "express";
import IUser from "../bridge/Interfaces/user.Interface";
import { ParseError } from "../helper/parseError";
import { HttpStatus } from "../bridge/enum/http-status.enum";

export const postLogin: RequestHandler = (req: Request, res: Response) => {
  try {
    const { identifier, password } = req.body;
  } catch (error) {
    const err = ParseError.errorToParse(error);
    console.error(`We have an Error : ${err}`);
    res.status(HttpStatus.BAD_GATEWAY).json({ error: err });
  }
};

export const register: RequestHandler = (req: Request, res: Response) => {
  try {
    const user = req.body as IUser;
  } catch (error) {
    const err = ParseError.errorToParse(error);
    console.error(`We have an Error : ${err}`);
    res.status(HttpStatus.BAD_REQUEST).json({ error: err });
  }
};
