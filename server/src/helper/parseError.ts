export class ParseError {
  static errorToParse(error: any): string {
    if (typeof error == "string") {
      return error;
    }

    return error.message;
  }
}
