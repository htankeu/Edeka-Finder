import { Router } from "express";
import { authRoute } from "./auth.route";
import productRouter from "./product.route";

export const indexRouter = Router();

indexRouter.use("/auth", authRoute);
indexRouter.use("/product", productRouter);
