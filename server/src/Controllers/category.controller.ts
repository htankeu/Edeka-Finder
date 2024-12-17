import { RequestHandler, Request, Response } from "express";
import { CategoryService } from "../Services/category.service";
import errorHandlerHelper from "../helper/error-handler.helper";
import { HttpStatus } from "../bridge/enum/http-status.enum";
import { ErrorType } from "../bridge/enum/errorType";
import { PagedListOverview } from "../bridge/models/PagedList.model";
import { ProductCategory } from "../entity/ProductCategory";

const categoryService: CategoryService = new CategoryService();

export const listCategories: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { page = "1", take = "5" } = req.query;
    const paramError = errorHandlerHelper.handleControllerListParameters(page?.toString() ?? "1", take?.toString() ?? "30");

    if (paramError) {
      errorHandlerHelper.handleControllerCancellation(res, HttpStatus.BAD_REQUEST, ErrorType.InvalidInput);
      return;
    }

    const parsedPage: number = parseInt(page?.toString() ?? "0");
    const parsedTake: number = parseInt(take?.toString() ?? "0");
    const list = await categoryService.list(parsedTake, parsedPage);
    const data: PagedListOverview<ProductCategory> = {
      take: parsedTake,
      currentPage: parsedPage,
      list: list.list,
      quantity: list.count,
    };

    res.status(HttpStatus.OK).json(data);
  } catch (error) {
    const errorMsg: string = errorHandlerHelper.handleControllerExeption(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: errorMsg });
  }
};

export const getCategory: RequestHandler = (req: Request, res: Response) => {};

export const updateCategory: RequestHandler = (req: Request, res: Response) => {};

export const deleteCategory: RequestHandler = (req: Request, res: Response) => {};

export const addCategory: RequestHandler = (req: Request, res: Response) => {};
