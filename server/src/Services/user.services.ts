import { Repository } from "typeorm";
import { CRUD } from "../bridge/Interfaces/crud.interface";
import { User } from "../entity/User";
import { dataSource } from "../dataSource";

export class UserService implements CRUD<User> {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = dataSource.getRepository(User);
  }

  list(take: number, number: number): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async create(resources: any): Promise<User> {
    return await this.userRepository.save(resources);
  }

  read(key: any): Promise<any> {
    throw new Error("Method not implemented.");
  }

  update(key: any, resources: any): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  delete(key: any): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
