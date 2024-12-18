import { IProduct } from "./product.interface";

export interface IProductCategory {
  CategoryId: number;
  Category: string;
  ProductList?: IProduct[];
  Quantity?: number;
}
