import { RequestHandler, Request, Response } from "express";
import errorHandlerHelper from "../helper/error-handler.helper";
import { HttpStatus } from "../bridge/enum/http-status.enum";
import { ErrorType } from "../bridge/enum/errorType";
import { ProductListFilter } from "../bridge/models/product-list-filter.model";
import { ProductService } from "../Services/product.service";
import { Product } from "../entity/Product";
import { PagedListOverview } from "../bridge/models/PagedList.model";

export const listProduct: RequestHandler = async (req: Request, res: Response) => {
  try {
    let { search, categories, sortBy, sort, take = "10", page = "1" } = req.query;
    categories = categories as string;

    const paramError = errorHandlerHelper.handleControllerListParameters(page.toString(), take.toString());
    if (paramError) {
      res.status(HttpStatus.BAD_REQUEST).json({ error: ErrorType.InvalidInput });
      return;
    }
    sort = sort?.toString().toUpperCase() as "ASC" | "DESC" | undefined;
    const filtersOptions: ProductListFilter = {
      search: (search ?? "").toString(),
      categories: categories ? categories.split(",") : ([] as string[]),
      manufacturer: "",
      sort: sort,
      sortBy: "ProductName",
    };
    const productService: ProductService = new ProductService();
    const list = await productService.listFiltered(Number(take), Number(page), filtersOptions);
    const data: PagedListOverview<Product> = {
      take: Number(take),
      currentPage: 0,
      list: list.list,
      quantity: list.quantity,
    };

    res.status(HttpStatus.OK).json(data);
  } catch (error) {
    const errorMsg: string = errorHandlerHelper.handleControllerExeption(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: errorMsg });
  }
};

export const getProduct: RequestHandler = async (req: Request, res: Response) => {
  try {
    const productService: ProductService = new ProductService();
    const productId: bigint = BigInt(req.params.id);
    const product: Product | null = await productService.read(productId);

    if (!product) {
      res.status(HttpStatus.NOT_FOUND).json({ error: ErrorType.ProductNoFound });
      return;
    }

    res.status(HttpStatus.OK).json(product);
  } catch (error) {
    const errorMsg: string = errorHandlerHelper.handleControllerExeption(error);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: errorMsg });
  }
};

export const deleteProduct: RequestHandler = (req: Request, res: Response) => {};

export const updateProduct: RequestHandler = (req: Request, res: Response) => {};

export const createProduct: RequestHandler = (req: Request, res: Response) => {};
