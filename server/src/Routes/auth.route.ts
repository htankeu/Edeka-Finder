import { Router } from "express";
import { postLogin, register } from "../Controllers/auth.controller";

export const authRoute = Router();

authRoute.post("/login", postLogin);
authRoute.post("/register", register);
