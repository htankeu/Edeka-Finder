import type { IProductCategory } from "./product-category.interface";
import type { IRack } from "./rack.interface";
import type { IRay } from "./ray.interface";

export interface IProduct {
  ProductId?: number;
  Description: string;
  price: number;
  BarCode: string;
  Category: IProductCategory;
  ProductName: string;
  ray: IRay;
  rack?: IRack;
  Quantity: number;
  image?: Buffer;
}
