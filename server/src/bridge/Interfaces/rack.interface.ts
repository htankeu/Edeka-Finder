import { IProduct } from "./product.interface";

export interface IRack {
  rackId?: number;
  rackNumber: number;
  products: IProduct[];
  maxCapacity: number;
}
