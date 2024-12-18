import { IRack } from "../../bridge/Interfaces/rack.interface";

export const rack1: IRack = {
  rackId: 1,
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
  rackId: 2,
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
  rackId: 3,
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
  rackId: 4,
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
  rackId: 5,
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
  rackId: 6,
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
