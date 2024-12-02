import { IProduct } from "./product.interface";
import { IRack } from "./rack.interface";

export interface IRay {
  rayId?: number;
  rayName: string;
  rack: IRack;
  assiocetedProduct: IProduct[];
}
