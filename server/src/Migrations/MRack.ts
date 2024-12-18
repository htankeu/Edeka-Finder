import { RackService } from "../Services/rack.service";
import { defaultRacks } from "./default-values/DRack";

const rackService: RackService = new RackService();

const racksMigration = () => {
  defaultRacks.forEach((rack) => {
    rackService.create(rack);
    setTimeout(() => {}, 1000);
  });
};

export default racksMigration;
