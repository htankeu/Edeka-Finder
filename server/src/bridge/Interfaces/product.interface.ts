import { IProductCategory } from "./product-category.interface";
import { IRack } from "./rack.interface";
import { IRay } from "./ray.interface";

export interface IProduct {
  ProductId?: number;
  Description: string;
  BarCode: string;
  Category: IProductCategory;
  ProductName: string;
  ray: IRay;
  rack: IRack;
  Quantity: number;
  image?: string;
}
