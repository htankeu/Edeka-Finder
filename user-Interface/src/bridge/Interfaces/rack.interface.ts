import type { IProductCategory } from "./product-category.interface";
import { type IProduct } from "./product.interface";
import type { IRay } from "./ray.interface";

export interface IRack {
  rackId?: number;
  rackNumber: number;
  category: IProductCategory;
  rays?: IRay[];
  products?: IProduct;
  coordonates: number[][];
  maxCapacity: number;
}
