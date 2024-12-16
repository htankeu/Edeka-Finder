import { ProductListFilter } from "../bridge/models/product-list-filter.model";
import { SearchHelper } from "./search.helper";

export class FilterOption {
  productFilter(filterOptions: ProductListFilter) {
    let filterOrArray: { key: string; value: any }[][] = [];
    const filterAndArray: { key: string; value: any }[] = [];
    const filterRelationsOrArray: { key: string; value: any }[][] = [];
    let filterRelations: {
      key: string;
      value: { key: string; value: { key: string; value: any }[][] };
    }[] = [];

    if (filterOptions.search !== "") {
      const searchHelper = new SearchHelper();
      filterOrArray = searchHelper.productSearch(filterOptions.search, ["ProductName", "Description", "Category"]);
    }

    if (filterOptions.categories.length > 0) {
      for (let index in filterOptions.categories) {
      }
    }

    filterRelations = [
      {
        key: "Categories",
        value: { key: "Category", value: filterRelationsOrArray },
      },
    ];

    return {
      filterOrArray,
      filterAndArray,
      filterRelationsOrArray,
      filterRelations,
    };
  }
}
