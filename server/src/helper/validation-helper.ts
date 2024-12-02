export class ValidationHelper {
  static checkPropertiesNullOrEmpty<T extends object>(data: T, properties: Array<string>): boolean {
    for (let key of properties) {
      if (!data.hasOwnProperty(key)) return true;
      if (!(data as any)[key]) return true;
    }

    return false;
  }
}
