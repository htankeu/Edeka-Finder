import { RequestHandler, Request, Response } from "express";

export const postLogin: RequestHandler = (req: Request, res: Response) => {
  try {
    const { identifier, password } = req.body;
  } catch (error) {}
};
