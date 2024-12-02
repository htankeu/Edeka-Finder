export interface CRUD<T> {
  list(take: number, number: number): Promise<any>;

  create(resources: T): Promise<T>;

  read(key: any): Promise<any>;

  update(key: any, resources: any): Promise<boolean>;

  delete(key: any): Promise<boolean>;
}
