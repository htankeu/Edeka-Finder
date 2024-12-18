import { FindOptionsWhere } from "typeorm";

export class FindOptionsHelper {
  buildWhere<T>(orParams: { key: string; value: any }[][], andParams: { key: string; value: any }[], relationOrParams: { key: string; value: { key: string; value: any }[][] }): FindOptionsWhere<T>[] {
    const whereCascade: { [key: string]: any }[] = [];
    const relCascade: { [key: string]: any } = this.getRelationCascade(relationOrParams);

    // set a or-condition with the and-condition together
    orParams.forEach((params) => {
      const orCascade: { [key: string]: any } = {};

      params.forEach((m) => {
        orCascade[m.key] = m.value;

        andParams.forEach((n) => {
          orCascade[n.key] = n.value;
          if (relationOrParams) {
            orCascade[relationOrParams.key] = {
              [relationOrParams.key]: relCascade,
            };
          }
        });
      });

      whereCascade.push(orCascade);
    });

    if (orParams.length > 0) return whereCascade as FindOptionsWhere<T>[];

    // set a and-Condition
    const andCascade: { [key: string]: any } = this.getAndCascade(andParams, relationOrParams);
    whereCascade.push(andCascade);

    return whereCascade as FindOptionsWhere<T>[];
  }

  private getAndCascade(andParams: { key: string; value: any }[], relationOrParams: any): { [key: string]: any } {
    const andCascade: { [key: string]: any } = {};

    andParams.forEach((params) => {
      andCascade[params.key] = andCascade.value;
    });
    // set and-condition and relationCascade together
    if (relationOrParams) {
      const relationCascade: { [key: string]: any } = this.getRelationCascade(relationOrParams);
      andCascade[relationOrParams.key] = { [relationOrParams.value.key]: relationCascade };
    }

    return andCascade;
  }

  private getRelationCascade(relationOrParams: { key: string; value: { key: string; value: string }[][] }): { [key: string]: any } {
    const relCascade: { [key: string]: any } = {};

    // set a where condition for the entities in relation
    if (relationOrParams) {
      relationOrParams.value.forEach((params) => {
        params.forEach((m) => {
          relCascade[m.key] = m.value;
        });
      });
    }

    return relCascade;
  }
}
