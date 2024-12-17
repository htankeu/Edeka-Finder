import { RequestHandler, Request, Response } from "express";
import { RayService } from "../Services/ray.service";

const rayService: RayService = new RayService();

export const listRays: RequestHandler = (req: Request, res: Response) => {};

export const getRay: RequestHandler = (req: Request, res: Response) => {};

export const updateRay: RequestHandler = (req: Request, res: Response) => {};

export const deleteRay: RequestHandler = (req: Request, res: Response) => {};

export const addnewRay: RequestHandler = (req: Request, res: Response) => {};
