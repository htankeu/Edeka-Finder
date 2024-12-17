import { Repository } from "typeorm";
import { CRUD } from "../bridge/Interfaces/crud.interface";
import { listCount } from "../bridge/models/find.model";
import { Ray } from "../entity/Ray";
import { dataSource } from "../dataSource";
import { IRay } from "../bridge/Interfaces/ray.interface";

export class RayService implements CRUD<Ray> {
  private rayRepository: Repository<Ray>;

  constructor() {
    this.rayRepository = dataSource.getRepository(Ray);
  }

  async list(take: number, number: number): Promise<listCount<Ray>> {
    const [rays, numOfRay]: [Ray[], number] = await this.rayRepository.findAndCount();

    return {
      list: rays,
      count: numOfRay,
    };
  }

  async create(resources: IRay): Promise<Ray> {
    const ray: Ray | null = await this.read(resources.rayId);

    if (ray) throw Error("The ID for this ray exist already in the database");

    return await this.rayRepository.create(resources);
  }

  async read(key: any): Promise<Ray | null> {
    const ray: Ray | null = await this.rayRepository.findOne({ where: { rayId: key } });

    return ray;
  }

  async update(key: any, resources: any): Promise<boolean> {
    const ray: Ray | null = await this.read(key);

    if (!ray) throw Error("The ID for this ray doesn't exist in the database");

    return (await this.rayRepository.update({ rayId: key }, resources)).affected ? true : false;
  }

  async delete(key: any): Promise<boolean> {
    const ray: Ray | null = await this.read(key);

    if (!ray) throw Error("The ID for this ray doesn't exist in the database");

    return (await this.rayRepository.delete({ rayId: key })).affected ? true : false;
  }
}
