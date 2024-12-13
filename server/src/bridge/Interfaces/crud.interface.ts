export interface CRUD<T> {
  list(take: number, number: number): Promise<any>;

  create(resources: any): Promise<T>;

  read(key: any): Promise<T | null>;

  update(key: any, resources: any): Promise<boolean>;

  delete(key: any): Promise<boolean>;
}
