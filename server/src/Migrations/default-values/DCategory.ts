import { IProductCategory } from "../../bridge/Interfaces/product-category.interface";
import { rack1, rack10, rack11, rack2, rack3, rack4, rack5, rack6, rack7, rack8, rack9 } from "./DRack";

export const ogCategory: IProductCategory = {
  CategoryId: 0,
  Category: "Obst und Gemüse",
  rack: rack1,
};

export const fwCategory: IProductCategory = {
  CategoryId: 1,
  Category: "Fleisch und Wurstwaren",
  rack: rack2,
};
export const fmCategory: IProductCategory = {
  CategoryId: 2,
  Category: "Fisch und Meeresfrüchte",
  rack: rack3,
};
export const meCategory: IProductCategory = {
  CategoryId: 3,
  Category: "Molkereiprodukte und Eier",
  rack: rack4,
};

export const bbCategory: IProductCategory = {
  CategoryId: 4,
  Category: "Brot und Backwaren",
  rack: rack5,
};

export const tkCategory: IProductCategory = {
  CategoryId: 5,
  Category: "Tiefkühlprodukte",
  rack: rack6,
};

export const gCategory: IProductCategory = {
  CategoryId: 6,
  Category: "Getränke",
  rack: rack7,
};

export const gnCategory: IProductCategory = {
  CategoryId: 7,
  Category: "Grundnahrungsmittel",
  rack: rack8,
};

export const ssCategory: IProductCategory = {
  CategoryId: 8,
  Category: "Süßwaren und Snacks",
  rack: rack9,
};

export const dkCategory: IProductCategory = {
  CategoryId: 9,
  Category: "Drogerie und Kosmetik",
  rack: rack10,
};

export const hCategory: IProductCategory = {
  CategoryId: 10,
  Category: "Haushaltswaren",
  rack: rack11,
};

export const defaultCategories: IProductCategory[] = [ogCategory, fwCategory, fmCategory, meCategory, bbCategory, tkCategory, gCategory, gnCategory, ssCategory, dkCategory, hCategory];
