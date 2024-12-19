import { IProductCategory } from "./product-category.interface";
import { IProduct } from "./product.interface";
import { IRay } from "./ray.interface";

export interface IRack {
  rackId?: number;
  rackNumber: number;
  category: IProductCategory;
  rays?: IRay[];
  products?: IProduct;
  coordonates: number[][];
  maxCapacity: number;
}
