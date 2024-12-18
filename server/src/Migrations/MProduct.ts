import { ProductService } from "../Services/product.service";
import defaultProducts from "./default-values/DProduct";

const productService: ProductService = new ProductService();
const productsMigration = () => {
  defaultProducts.forEach((product) => {
    productService.create(product);
    setTimeout(() => {}, 1000);
  });
};

export default productsMigration;
