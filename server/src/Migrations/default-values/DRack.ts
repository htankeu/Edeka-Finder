import { IRack } from "../../bridge/Interfaces/rack.interface";
import { bbCategory, dkCategory, fmCategory, fwCategory, gCategory, gnCategory, hCategory, meCategory, ogCategory, ssCategory, tkCategory } from "./DCategory";

export const rack1: IRack = {
  rackId: 1,
  rackNumber: 0,
  category: ogCategory,
  coordonates: [
    [4.5, 1.5],
    [6.5, 1.5],
    [8, 1.5],
    [8.5, 1.5],
    [9, 1.5],
    [9.5, 1.5],
    [10, 1.5],
    [7, 1.5],
    [6.5, 5.5],
    [7, 5.5],
    [7.5, 5.5],
    [8, 5.5],
    [8.5, 5.5],
    [9, 5.5],
    [9.5, 5.5],
    [10, 5.5],
  ],
  maxCapacity: 50,
};

export const rack2: IRack = {
  rackId: 2,
  rackNumber: 1,
  category: fwCategory,
  coordonates: [
    [7, 17],
    [7.5, 17],
    [8, 17],
    [8.5, 17],
    [9, 17],
    [8.5, 21.5],
    [7, 21.5],
    [7.5, 21.5],
    [8, 21.5],
    [8.5, 21.5],
    [9, 21.5],
  ],
  maxCapacity: 50,
};

export const rack3: IRack = {
  rackId: 3,
  rackNumber: 2,
  category: fmCategory,
  coordonates: [
    [1, 13],
    [1, 13.5],
    [1, 16.5],
    [3, 10],
    [3, 13.5],
    [3, 16],
  ],
  maxCapacity: 50,
};

export const rack4: IRack = {
  rackId: 4,
  rackNumber: 3,
  category: meCategory,
  coordonates: [
    [8, 8],
    [8, 11],
    [8, 14],
    [10, 8],
    [10, 11],
    [10, 14],
  ],
  maxCapacity: 50,
};
export const rack5: IRack = {
  rackId: 5,
  rackNumber: 4,
  category: bbCategory,
  coordonates: [
    [3, 24.5],
    [3, 27.5],
    [3, 30.5],
    [3, 33.5],
    [3, 36],
    [5, 24.5],
    [5, 27.5],
    [5, 30.5],
    [5, 33.5],
    [5, 36],
  ],
  maxCapacity: 50,
};
export const rack6: IRack = {
  rackId: 6,
  rackNumber: 5,
  category: tkCategory,
  coordonates: [],
  maxCapacity: 50,
};
export const rack7: IRack = {
  rackId: 7,
  rackNumber: 5,
  category: gCategory,
  coordonates: [],
  maxCapacity: 50,
};
export const rack8: IRack = {
  rackId: 8,
  rackNumber: 5,
  category: gnCategory,
  coordonates: [],
  maxCapacity: 50,
};
export const rack9: IRack = {
  rackId: 9,
  rackNumber: 5,
  category: ssCategory,
  coordonates: [],
  maxCapacity: 50,
};
export const rack10: IRack = {
  rackId: 10,
  rackNumber: 5,
  category: dkCategory,
  coordonates: [],
  maxCapacity: 50,
};
export const rack11: IRack = {
  rackId: 11,
  rackNumber: 5,
  category: hCategory,
  coordonates: [],
  maxCapacity: 50,
};

export const defaultRacks: IRack[] = [rack1, rack2, rack3, rack4, rack5, rack6, rack7, rack8, rack9, rack10, rack11];
