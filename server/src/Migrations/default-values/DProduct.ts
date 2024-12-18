import { IProduct } from "../../bridge/Interfaces/product.interface";
import { fwCategory, ogCategory } from "./DCategory";
import { ray1, ray2 } from "./DRay";
import * as path from "path";
import * as fs from "fs";

const baseDir: string = __dirname;
const assetsDir: string = path.join(baseDir, "static/assets");

const defaultProducts: IProduct[] = [
  {
    Description: "Frische Äpfel",
    BarCode: "00001",
    Category: ogCategory,
    ProductName: "Äpfel",
    ray: ray1,
    Quantity: 50,
    image: fs.readFileSync(path.join(assetsDir, "äpfel.jpg")),
  },
  {
    Description: "Frische Karotten",
    BarCode: "00002",
    Category: ogCategory,
    ProductName: "Karotten",
    ray: ray1,
    Quantity: 50,
    image: fs.readFileSync(path.join(assetsDir, "karotten.jpg")),
  },
  {
    Description: "Frische Tomaten",
    BarCode: "00003",
    Category: ogCategory,
    ProductName: "Bio Tomaten",
    ray: ray1,
    Quantity: 50,
    image: fs.readFileSync(path.join(assetsDir, "tomaten.jpg")),
  },
  {
    Description: "Frische Petersilie",
    BarCode: "00004",
    Category: ogCategory,
    ProductName: "Petersilie",
    ray: ray1,
    Quantity: 50,
    image: fs.readFileSync(path.join(assetsDir, "petersilie.jpg")),
  },
  {
    Description: "Frisches Rindfleisch",
    BarCode: "00005",
    Category: fwCategory,
    ProductName: "Rindfleisch",
    ray: ray2,
    Quantity: 30,
    image: fs.readFileSync(path.join(assetsDir, "rindfleisch.jpg")),
  },
];

export default defaultProducts;
