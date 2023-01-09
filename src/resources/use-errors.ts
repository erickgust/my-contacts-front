import { useState } from 'react'

type Error = {
  field: string
  message: string
}

export function useErrors () {
  const [errors, setErrors] = useState<Error[]>([])

  function setError ({ field, message }: Error) {
    const errorAlreadyExists = errors.find(error => error.field === field)

    if (errorAlreadyExists) {
      return
    }

    setErrors(errors => [
      ...errors,
      { field, message },
    ])
  }

  function removeError (field: string) {
    setErrors(errors => errors.filter(error => error.field !== field))
  }

  function getErrorMessageByFieldName (fieldName: string) {
    return errors.find(error => error.field === fieldName)?.message
  }

  return { errors, setError, removeError, getErrorMessageByFieldName }
}
