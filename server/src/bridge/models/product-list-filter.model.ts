export interface ProductListFilter {
  search: string;
  categories: string[];
  manufacturer: string;
  sort: "ASC" | "DESC" | undefined | string;
  sortBy: string;
}
