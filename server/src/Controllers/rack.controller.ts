import { RequestHandler, Request, Response } from "express";
import { RackService } from "../Services/rack.service";

const rackService: RackService = new RackService();

export const listRacks: RequestHandler = (req: Request, res: Response) => {};

export const getRack: RequestHandler = (req: Request, res: Response) => {};

export const updateRack: RequestHandler = (req: Request, res: Response) => {};

export const deleteRack: RequestHandler = (req: Request, res: Response) => {};

export const createRack: RequestHandler = (req: Request, res: Response) => {};
