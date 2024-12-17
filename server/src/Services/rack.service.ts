import { Repository } from "typeorm";
import { CRUD } from "../bridge/Interfaces/crud.interface";
import { listCount } from "../bridge/models/find.model";
import { Rack } from "../entity/Rack";
import { dataSource } from "../dataSource";
import { IRack } from "../bridge/Interfaces/rack.interface";

export class RackService implements CRUD<Rack> {
  private rackRepository: Repository<Rack>;

  constructor() {
    this.rackRepository = dataSource.getRepository(Rack);
  }
  async list(take: number, number: number): Promise<listCount<Rack>> {
    const [racks, numOfRack]: [Rack[], number] = await this.rackRepository.findAndCount();

    return {
      list: racks,
      count: numOfRack,
    };
  }

  async create(resources: IRack): Promise<Rack> {
    const rack: Rack | null = await this.read(resources.rackId);
    if (rack) throw new Error("The ID is already used");

    return await this.rackRepository.create(resources);
  }

  async read(key: any): Promise<Rack | null> {
    const rack: Rack | null = await this.rackRepository.findOne({ where: { rackId: key } });

    return rack;
  }

  async update(key: any, resources: any): Promise<boolean> {
    const rack: Rack | null = await this.read(key);
    if (!rack) throw new Error("The ID doesn't exist in the database");

    return (await this.rackRepository.update({ rackId: key }, resources)).affected ? true : false;
  }

  async delete(key: any): Promise<boolean> {
    const rack: Rack | null = await this.read(key);
    if (!rack) throw new Error("The ID doesn't exist in the database");

    return (await this.rackRepository.delete({ rackId: key })).affected ? true : false;
  }
}
