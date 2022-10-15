import React from 'react'
// Por Conversão os customs hooks começam com a palavra use.

export  default function useErrors(){
  const [errors, setErrors] = React.useState([]);

  function setError({ field, message }){
    const errorAlreadyExists = errors.find((error) => error.field === field);
    if(errorAlreadyExists) return
    setErrors((prev) => [...prev, { field, message}  ])
  }

 function removeError({field}){
   setErrors((prev) => prev.filter((error) => error.field !== field))
 }

  function getErrorMessageByFieldName(fieldName){
    return errors.find((error) => error.field === fieldName)?.message
  }




  return {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName
  }

}
