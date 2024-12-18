import axios from "axios";
import type { IProduct } from "../bridge/Interfaces/product.interface";
import type { ProductListFilter } from "../bridge/models/product-list-filter.model";
import type { PagedListOverview } from "../bridge/models/PagedList.model";
import { HttpStatus } from "../bridge/enum/http-status.enum";
import { ErrorType } from "../bridge/enum/errorType";
import errorHandlerHelper from "../helper/error-handler.helper";

class ProductServices {
  private SERVER_HOST: string;

  constructor() {
    this.SERVER_HOST = String(import.meta.env.PUBLIC_VITE_REACT_API_URL);
  }

  async getProducts(
    page: number = 1,
    take: number = 15,
    filterparams: ProductListFilter = {
      search: "",
      categories: "",
      manufacturer: "",
      sort: "ASC",
      sortBy: "",
    }
  ): Promise<IProduct[]> {
    const result = await axios.get(`${this.SERVER_HOST}/product?page=${page}&take=${take}&search=${filterparams.search}&sort=${filterparams.sort}&categories=${filterparams.categories}`);
    const dataResult: PagedListOverview<IProduct> = result.data;
    const products: IProduct[] = dataResult.list;

    return products;
  }

  async getProductImage(id: any, productName: string): Promise<string> {
    try {
      const result = await axios.get(`${this.SERVER_HOST}/product/${id}/image`);
      if (result.status !== HttpStatus.OK) throw ErrorType.ProductNoFound;

      const resultImage = result.data;

      const imageBlob: Blob = new Blob([resultImage], { type: "image/jpg" });
      const imageURL: string = URL.createObjectURL(imageBlob);

      return imageURL;
    } catch (error) {
      const errorMsg: string = errorHandlerHelper.handleControllerExeption(error);
      throw errorMsg;
    }
  }
}

export default new ProductServices();
