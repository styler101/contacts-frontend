export  function isEmailValid(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}


export function getErrorMessageByFieldName(formErrors, errorField){
  const findField = formErrors.find((error) => error.field === errorField);
  if(findField) return findField
  return false;
}
/*
export function getErrorMessageByFieldName(formErrors, errorField){
  const findField = formErrors.find((error) => error.field === errorField)?.message
  if(findField) return findField
  return false;
}
*/
