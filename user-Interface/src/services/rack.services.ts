import axios from "axios";
import type { IRack } from "../bridge/Interfaces/rack.interface";
import type { PagedListOverview } from "../bridge/models/PagedList.model";

class RackService {
  private SERVER_HOST: string;

  constructor() {
    this.SERVER_HOST = String(import.meta.env.PUBLIC_VITE_REACT_API_URL);
  }

  async getAllRacks() {
    const result = await axios.get(`${this.SERVER_HOST}/rack`);
    const dataResult: PagedListOverview<IRack> = result.data;

    const racks: IRack[] = dataResult.list;

    return racks;
  }
}

export default new RackService();
