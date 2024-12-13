import { Router } from "express";
import { createProduct, deleteProduct, getProduct, listProduct, updateProduct } from "../Controllers/product.controller";

const productRouter: Router = Router();

productRouter.get("/", listProduct);

productRouter.route("/:Id").get(getProduct).delete(deleteProduct).put(updateProduct);

productRouter.post("/create", createProduct);

export default productRouter;
