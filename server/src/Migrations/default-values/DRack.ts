import { IRack } from "../../bridge/Interfaces/rack.interface";

export const rack1: IRack = {
  rackNumber: 0,
  coordonates: [
    [1, 1],
    [1, 2],
    [1, 3],
    [3, 1],
    [3, 2],
    [3, 3],
  ],
  maxCapacity: 50,
};

export const rack2: IRack = {
  rackNumber: 1,
  coordonates: [
    [1, 1],
    [1, 2],
    [1, 3],
    [3, 1],
    [3, 2],
    [3, 3],
  ],
  maxCapacity: 50,
};

export const rack3: IRack = {
  rackNumber: 2,
  coordonates: [
    [1, 1],
    [1, 2],
    [1, 3],
    [3, 1],
    [3, 2],
    [3, 3],
  ],
  maxCapacity: 50,
};

export const rack4: IRack = {
  rackNumber: 3,
  coordonates: [
    [1, 1],
    [1, 2],
    [1, 3],
    [3, 1],
    [3, 2],
    [3, 3],
  ],
  maxCapacity: 50,
};
export const rack5: IRack = {
  rackNumber: 4,
  coordonates: [
    [1, 1],
    [1, 2],
    [1, 3],
    [3, 1],
    [3, 2],
    [3, 3],
  ],
  maxCapacity: 50,
};
export const rack6: IRack = {
  rackNumber: 5,
  coordonates: [
    [1, 1],
    [1, 2],
    [1, 3],
    [3, 1],
    [3, 2],
    [3, 3],
  ],
  maxCapacity: 50,
};

export const defaultRacks: IRack[] = [rack1, rack2, rack3, rack4, rack5, rack6];
