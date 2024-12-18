import { IProductCategory } from "../../bridge/Interfaces/product-category.interface";

export const ogCategory: IProductCategory = {
  CategoryId: 0,
  Category: "Obst und Gemüse",
};

export const fwCategory: IProductCategory = {
  CategoryId: 1,
  Category: "Fleisch und Wurstwaren",
};
export const fmCategory: IProductCategory = {
  CategoryId: 2,
  Category: "Fisch und Meeresfrüchte",
};
export const meCategory: IProductCategory = {
  CategoryId: 3,
  Category: "Molkereiprodukte und Eier",
};

export const bbCategory: IProductCategory = {
  CategoryId: 4,
  Category: "Brot und Backwaren",
};

export const tkCategory: IProductCategory = {
  CategoryId: 5,
  Category: "Tiefkühlprodukte",
};

export const gCategory: IProductCategory = {
  CategoryId: 6,
  Category: "Getränke",
};

export const gnCategory: IProductCategory = {
  CategoryId: 7,
  Category: "Grundnahrungsmittel",
};

export const ssCategory: IProductCategory = {
  CategoryId: 8,
  Category: "Süßwaren und Snacks",
};

export const dkCategory: IProductCategory = {
  CategoryId: 9,
  Category: "Drogerie und Kosmetik",
};

export const hCategory: IProductCategory = {
  CategoryId: 10,
  Category: "Haushaltswaren",
};

export const defaultCategories: IProductCategory[] = [ogCategory, fwCategory, fmCategory, meCategory, bbCategory, tkCategory, gCategory, gnCategory, ssCategory, dkCategory, hCategory];
