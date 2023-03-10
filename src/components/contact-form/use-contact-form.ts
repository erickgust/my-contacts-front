import { ForwardedRef, useEffect, useImperativeHandle, useState } from 'react'

import { Category } from '@/services/mappers/category-mapper'

import categoriesService from '@/services/categories-service'

import { formatPhone } from '@/utils/formatPhone'
import { isEmailValid } from '@/utils/isEmailValid'
import { useErrors } from '@/resources/use-errors'
import { ContactFormRef } from './contact-form'
import { ContactFormData } from '@/services/mappers/contact-mapper'

export function useContactForm (
  ref: ForwardedRef<ContactFormRef>,
  onSubmit: (data: ContactFormData) => Promise<void>,
) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoadingCategories, setIsLoadingCategories] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { errors, setError, removeError, getErrorMessageByFieldName } = useErrors()

  const isFormValid = Boolean(name && errors.length === 0)

  useImperativeHandle(ref, () => ({
    setFieldsValue: (contact) => {
      setName(contact.name ?? '')
      setEmail(contact.email ?? '')
      setPhone(formatPhone(contact.phone ?? ''))
      setCategoryId(contact.category.id ?? '')
    },
    resetFields: () => {
      setName('')
      setEmail('')
      setPhone('')
      setCategoryId('')
    },
  }), [])

  useEffect(() => {
    async function loadCategories () {
      try {
        const categoriesList = await categoriesService.listCategories()

        setCategories(categoriesList)
      } catch {} finally {
        setIsLoadingCategories(false)
      }
    }

    loadCategories()
  }, [])

  function handleNameChange (e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)

    if (!e.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório.' })
    } else {
      removeError('name')
    }
  }

  function handleEmailChange (e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)

    if (e.target.value && !isEmailValid(e.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido.' })
    } else {
      removeError('email')
    }
  }

  function handlePhoneChange (e: React.ChangeEvent<HTMLInputElement>) {
    setPhone(formatPhone(e.target.value))
  }

  async function handleSubmit (e: React.FormEvent) {
    e.preventDefault()

    setIsSubmitting(true)

    await onSubmit({ name, email, phone, categoryId })

    setIsSubmitting(false)
  }

  return {
    name,
    email,
    phone,
    categoryId,
    setCategoryId,
    categories,
    isLoadingCategories,
    isSubmitting,
    isFormValid,
    getErrorMessageByFieldName,
    handleNameChange,
    handleEmailChange,
    handlePhoneChange,
    handleSubmit,
  }
}
