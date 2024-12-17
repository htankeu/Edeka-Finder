import { Router } from "express";
import { addnewRay, deleteRay, getRay, listRays, updateRay } from "../Controllers/ray.controller";

const rayRouter: Router = Router();

rayRouter.get("/", listRays);

rayRouter.route("/:Id").get(getRay).put(updateRay).delete(deleteRay);

rayRouter.post("/add", addnewRay);

export default rayRouter;
