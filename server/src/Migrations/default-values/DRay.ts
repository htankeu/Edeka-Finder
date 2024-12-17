import { IRay } from "../../bridge/Interfaces/ray.interface";
import { rack1, rack2, rack3, rack4, rack5, rack6 } from "./DRack";

export const ray1: IRay = {
  rayName: "Obst und Gemüse",
  rack: rack1,
};

export const ray2: IRay = {
  rayName: "Fleisch und Wurstwaren",
  rack: rack2,
};
export const ray3: IRay = {
  rayName: "Fisch und Meeresfrüchte",
  rack: rack3,
};
export const ray4: IRay = {
  rayName: "Molkereiprodukte und Eier",
  rack: rack4,
};

export const ray5: IRay = {
  rayName: "Brot und Backwaren",
  rack: rack5,
};

export const ray6: IRay = {
  rayName: "Tiefkühlprodukte",
  rack: rack6,
};

export const defaultRays: IRay[] = [ray1, ray2, ray3, ray4, ray5, ray6];
