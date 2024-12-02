import { IProduct } from "./product.interface";

export interface IRay {
  rayId?: number;
  rayName: string;
  assiocetedProduct: IProduct[];
}
