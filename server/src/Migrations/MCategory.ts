import { CategoryService } from "../Services/category.service";
import { defaultCategories } from "./default-values/DCategory";

const categoryService: CategoryService = new CategoryService();

const categoriesMigration = () => {
  defaultCategories.forEach((category) => {
    categoryService.create(category);
    setTimeout(() => {}, 1000);
  });
};

export default categoriesMigration;
