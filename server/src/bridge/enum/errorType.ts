export enum ErrorType {
  EmailAlreadyTaken = "email_already_taken",
  InvalidInput = "invalid_input",
  NoInDatabase = "not_in_database",
  WrongCredentials = "wrong_credentials",
  MissingUser = "missing_user",
  IncompleteInformation = "not_complete_information",
  PageParamIsNaN = "page_param_is_not_a_number",
  TakeParamIsNaN = "take_param_is_not_a_number",
  PageParamOutOfBounds = "page_param_out_of_bounds",
  TakeParamOutOfBounds = "take_param_out_of_bounds",
  ProductNoFound = "product_not_found",
}
