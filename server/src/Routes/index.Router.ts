import { Router } from "express";
import { authRoute } from "./auth.route";

export const indexRouter = Router();

indexRouter.use("/auth", authRoute);
