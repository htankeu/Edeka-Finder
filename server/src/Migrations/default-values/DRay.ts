import { IRay } from "../../bridge/Interfaces/ray.interface";
import { rack1, rack2, rack3, rack4, rack5, rack6 } from "./DRack";

export const ray1: IRay = {
  rayId: 1,
  rayName: "Obst und Gemüse",
  rack: rack1,
};

export const ray2: IRay = {
  rayId: 2,
  rayName: "Fleisch und Wurstwaren",
  rack: rack2,
};
export const ray3: IRay = {
  rayId: 3,
  rayName: "Fisch und Meeresfrüchte",
  rack: rack3,
};
export const ray4: IRay = {
  rayId: 4,
  rayName: "Molkereiprodukte und Eier",
  rack: rack4,
};

export const ray5: IRay = {
  rayId: 5,
  rayName: "Brot und Backwaren",
  rack: rack5,
};

export const ray6: IRay = {
  rayId: 6,
  rayName: "Tiefkühlprodukte",
  rack: rack6,
};

export const defaultRays: IRay[] = [ray1, ray2, ray3, ray4, ray5, ray6];
