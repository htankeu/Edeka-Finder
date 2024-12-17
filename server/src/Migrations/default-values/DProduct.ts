import { IProduct } from "../../bridge/Interfaces/product.interface";
import { ogCategory } from "./DCategory";
import { ray1 } from "./DRay";

const defaultProducts: IProduct[] = [
  {
    Description: "Frische Äpfel",
    BarCode: "00001",
    Category: ogCategory,
    ProductName: "Äpfel",
    ray: ray1,
    Quantity: 50,
  },
];

export default defaultProducts;
