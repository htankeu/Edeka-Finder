import { IProductCategory } from "../../bridge/Interfaces/product-category.interface";

export const ogCategory: IProductCategory = {
  CategoryId: 0,
  Name: "Obst und Gemüse",
};

export const fwCategory: IProductCategory = {
  CategoryId: 1,
  Name: "Fleisch und Wurstwaren",
};
export const fmCategory: IProductCategory = {
  CategoryId: 2,
  Name: "Fisch und Meeresfrüchte",
};
export const meCategory: IProductCategory = {
  CategoryId: 3,
  Name: "Molkereiprodukte und Eier",
};

export const bbCategory: IProductCategory = {
  CategoryId: 4,
  Name: "Brot und Backwaren",
};

export const tkCategory: IProductCategory = {
  CategoryId: 5,
  Name: "Tiefkühlprodukte",
};

export const gCategory: IProductCategory = {
  CategoryId: 6,
  Name: "Getränke",
};

export const gnCategory: IProductCategory = {
  CategoryId: 7,
  Name: "Grundnahrungsmittel",
};

export const ssCategory: IProductCategory = {
  CategoryId: 8,
  Name: "Süßwaren und Snacks",
};

export const dkCategory: IProductCategory = {
  CategoryId: 9,
  Name: "Drogerie und Kosmetik",
};

export const hCategory: IProductCategory = {
  CategoryId: 10,
  Name: "Haushaltswaren",
};

export const defaultCategories: IProductCategory[] = [ogCategory, fwCategory, fmCategory, meCategory, bbCategory, tkCategory, gCategory, gnCategory, ssCategory, dkCategory, hCategory];
