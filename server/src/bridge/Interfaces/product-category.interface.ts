import { IProduct } from "./product.interface";
import { IRack } from "./rack.interface";

export interface IProductCategory {
  CategoryId: number;
  Category: string;
  rack: IRack;
  ProductList?: IProduct[];
  Quantity?: number;
}
