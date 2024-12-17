import { Router } from "express";
import { addCategory, deleteCategory, getCategory, listCategories, updateCategory } from "../Controllers/category.controller";

const categoryRouter: Router = Router();

categoryRouter.get("/", listCategories);

categoryRouter.route("/:Id").get(getCategory).put(updateCategory).delete(deleteCategory);

categoryRouter.post("/add", addCategory);

export default categoryRouter;
