export interface PagedListOverview<T> {
  take: number;
  currentPage: number;
  list: T[];
  quantity: number;
}
