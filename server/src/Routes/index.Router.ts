import { Router } from "express";
import { authRoute } from "./auth.route";
import productRouter from "./product.route";
import categoryRouter from "./category.route";
import rackRouter from "./rack.route";
import rayRouter from "./ray.route";

export const indexRouter = Router();

indexRouter.use("/auth", authRoute);
indexRouter.use("/product", productRouter);
indexRouter.use("/category", categoryRouter);
indexRouter.use("/rack", rackRouter);
indexRouter.use("/ray", rayRouter);
