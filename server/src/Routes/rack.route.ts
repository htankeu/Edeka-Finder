import { Router } from "express";
import { createRack, deleteRack, getRack, listRacks, updateRack } from "../Controllers/rack.controller";

const rackRouter: Router = Router();

rackRouter.get("/", listRacks);

rackRouter.route("/:Id").get(getRack).put(updateRack).delete(deleteRack);

rackRouter.post("/add", createRack);

export default rackRouter;
