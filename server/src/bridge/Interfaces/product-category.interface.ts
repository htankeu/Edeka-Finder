import { IProduct } from "./product.interface";

export interface IProductCategory {
  Name: string;
  Product: IProduct;
  Quantity: number;
}
