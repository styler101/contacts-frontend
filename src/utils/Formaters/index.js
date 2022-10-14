export function notEmptyStringOrDefault(value){
  return  typeof  value === 'string' ? value.trim() : ''
}


export function numberOrDefault(value){
  return typeof (value) === 'number' ? value : 0
}


export  function formatPhone(phoneNumber) {
  return phoneNumber
    .replace(/\D/g, '')
    .replace(/^(\d{2})\B/, '($1) ')
    .replace(/(\d{1})?(\d{4})(\d{4})/, '$1$2-$3');
}


export function removeFormatPhone(phoneNumber){
  return phoneNumber.replace(/\D/g, '')
}
