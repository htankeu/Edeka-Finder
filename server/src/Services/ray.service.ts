import { CRUD } from "../bridge/Interfaces/crud.interface";
import { Ray } from "../entity/Ray";

export class RayService implements CRUD<Ray> {
  list(take: number, number: number): Promise<any> {
    throw new Error("Method not implemented.");
  }

  create(resources: any): Promise<Ray> {
    throw new Error("Method not implemented.");
  }

  read(key: any): Promise<Ray | null> {
    throw new Error("Method not implemented.");
  }

  update(key: any, resources: any): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  delete(key: any): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
