import { IProduct } from "./product.interface";

export interface IProductCategory {
  CategoryId: number;
  Name: string;
  ProductList: IProduct[];
  Quantity: number;
}
