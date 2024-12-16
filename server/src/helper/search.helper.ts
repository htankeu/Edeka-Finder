import { ILike } from "typeorm";

export class SearchHelper {
  productSearch(searchValue: string, searchKeys: string[]): { key: string; value: any }[][] {
    let result: { key: string; value: any }[][] = [];

    for (let option of searchKeys) {
      result.push([{ key: `${option}`, value: ILike(`%${searchValue}%`) }]);
    }

    result.push([{ key: "Categories", value: { Category: { Name: ILike(`%${searchValue}%`) } } }]);

    return result;
  }
}
