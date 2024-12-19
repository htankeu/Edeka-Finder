import { IRack } from "../../bridge/Interfaces/rack.interface";
import { bbCategory, dkCategory, fmCategory, fwCategory, gCategory, gnCategory, hCategory, meCategory, ogCategory, ssCategory, tkCategory } from "./DCategory";

export const rack1: IRack = {
  rackId: 1,
  rackNumber: 0,
  category: ogCategory,
  coordonates: [
    [10, 7],
    [10, 8],
    [10, 9],
    [10, 10],
    [10, 11],
    [11, 7],
    [11, 8],
    [11, 9],
    [11, 10],
    [11, 11],
  ],
  maxCapacity: 50,
};

export const rack2: IRack = {
  rackId: 2,
  rackNumber: 1,
  category: fwCategory,
  coordonates: [
    [16, 7],
    [16, 8],
    [16, 9],
    [16, 10],
    [16, 11],
    [17, 7],
    [17, 8],
    [17, 9],
    [17, 10],
    [17, 11],
  ],
  maxCapacity: 50,
};

export const rack3: IRack = {
  rackId: 3,
  rackNumber: 2,
  category: fmCategory,
  coordonates: [
    [21, 7],
    [21, 8],
    [21, 9],
    [21, 10],
    [21, 11],
    [22, 7],
    [22, 8],
    [22, 9],
    [22, 10],
    [22, 11],
  ],
  maxCapacity: 50,
};

export const rack4: IRack = {
  rackId: 4,
  rackNumber: 3,
  category: meCategory,
  coordonates: [
    [13, 7],
    [13, 8],
    [13, 9],
    [13, 10],
    [13, 11],
    [14, 7],
    [14, 8],
    [14, 9],
    [14, 10],
    [14, 11],
  ],
  maxCapacity: 50,
};
export const rack5: IRack = {
  rackId: 5,
  rackNumber: 4,
  category: bbCategory,
  coordonates: [
    [5, 7],
    [5, 8],
    [5, 9],
    [5, 10],
    [5, 11],
    [6, 7],
    [6, 8],
    [6, 9],
    [6, 10],
    [6, 11],
  ],
  maxCapacity: 50,
};
export const rack6: IRack = {
  rackId: 6,
  rackNumber: 5,
  category: tkCategory,
  coordonates: [
    [7, 13],
    [7, 14],
    [7, 15],
    [9, 13],
    [9, 14],
    [9, 15],
  ],
  maxCapacity: 50,
};
export const rack7: IRack = {
  rackId: 7,
  rackNumber: 5,
  category: gCategory,
  coordonates: [
    [7, 13],
    [7, 14],
    [7, 15],
    [9, 13],
    [9, 14],
    [9, 15],
  ],
  maxCapacity: 50,
};
export const rack8: IRack = {
  rackId: 8,
  rackNumber: 5,
  category: gnCategory,
  coordonates: [
    [7, 13],
    [7, 14],
    [7, 15],
    [9, 13],
    [9, 14],
    [9, 15],
  ],
  maxCapacity: 50,
};
export const rack9: IRack = {
  rackId: 9,
  rackNumber: 5,
  category: ssCategory,
  coordonates: [
    [7, 13],
    [7, 14],
    [7, 15],
    [9, 13],
    [9, 14],
    [9, 15],
  ],
  maxCapacity: 50,
};
export const rack10: IRack = {
  rackId: 10,
  rackNumber: 5,
  category: dkCategory,
  coordonates: [
    [7, 13],
    [7, 14],
    [7, 15],
    [9, 13],
    [9, 14],
    [9, 15],
  ],
  maxCapacity: 50,
};
export const rack11: IRack = {
  rackId: 11,
  rackNumber: 5,
  category: hCategory,
  coordonates: [
    [7, 13],
    [7, 14],
    [7, 15],
    [9, 13],
    [9, 14],
    [9, 15],
  ],
  maxCapacity: 50,
};

export const defaultRacks: IRack[] = [rack1, rack2, rack3, rack4, rack5, rack6, rack7, rack8, rack9, rack10, rack11];
