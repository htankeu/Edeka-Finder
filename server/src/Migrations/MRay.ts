import { RayService } from "../Services/ray.service";
import { defaultRays } from "./default-values/DRay";

const rayService: RayService = new RayService();

const raysMigration = () => {
  defaultRays.forEach((ray) => {
    rayService.create(ray);

    setTimeout(() => {}, 1000);
  });
};

export default raysMigration;
