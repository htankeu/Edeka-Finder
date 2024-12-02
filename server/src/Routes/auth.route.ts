import { Router } from "express";
import { postLogin } from "../Controllers/auth.controller";

export const authRoute = Router();

authRoute.post("/login", postLogin);
