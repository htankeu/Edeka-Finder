import axios from "axios";
import type { IProduct } from "../bridge/Interfaces/product.interface";
import type { ProductListFilter } from "../bridge/models/product-list-filter.model";
import type { PagedListOverview } from "../bridge/models/PagedList.model";

export class ProductServices {
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
    const result: PagedListOverview<IProduct> = await axios.get(
      `${this.SERVER_HOST}/product?page=${page}&take=${take}&search=${filterparams.search}&sort=${filterparams.sort}&categories=${filterparams.categories}`
    );
    const products: IProduct[] = result.list;

    return products;
  }
}
