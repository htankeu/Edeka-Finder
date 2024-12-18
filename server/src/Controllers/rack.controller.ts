import { RequestHandler, Request, Response } from "express";
import { RackService } from "../Services/rack.service";
import errorHandlerHelper from "../helper/error-handler.helper";
import { HttpStatus } from "../bridge/enum/http-status.enum";
import { ErrorType } from "../bridge/enum/errorType";
import { PagedListOverview } from "../bridge/models/PagedList.model";
import { Rack } from "../entity/Rack";

const rackService: RackService = new RackService();

export const listRacks: RequestHandler = async (req: Request, res: Response) => {
  try {
    let { take = "10", page = "1" } = req.query;

    const paramError = errorHandlerHelper.handleControllerListParameters(page.toString(), take.toString());
    if (paramError) {
      res.status(HttpStatus.BAD_REQUEST).json({ error: ErrorType.InvalidInput });
      return;
    }

    const list = await rackService.list(Number(take), Number(page));
    const data: PagedListOverview<Rack> = {
      take: Number(take),
      currentPage: 0,
      list: list.list,
      quantity: list.count,
    };

    res.status(HttpStatus.OK).json(data);
  } catch (error) {
    const errorMsg: string = errorHandlerHelper.handleControllerExeption(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: errorMsg });
  }
};

export const getRack: RequestHandler = (req: Request, res: Response) => {};

export const updateRack: RequestHandler = (req: Request, res: Response) => {};

export const deleteRack: RequestHandler = (req: Request, res: Response) => {};

export const createRack: RequestHandler = (req: Request, res: Response) => {};
