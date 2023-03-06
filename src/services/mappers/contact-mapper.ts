export type ContactFormData = {
  phone: string
  email: string
  name: string
  categoryId: string
}

export type ContactResponse = {
  id: string
  phone: string
  email: string
  name: string
  category_id: string
  category_name: string
}

export type Contact = {
  id: string
  phone: string
  email: string
  name: string
  category: {
    id: string
    name: string
  }
}

class ContactMapper {
  toPersistence (contact: ContactFormData) {
    return {
      phone: contact.phone,
      email: contact.email,
      name: contact.name,
      category_id: contact.categoryId,
    }
  }

  toDomain (contact: ContactResponse): Contact {
    return {
      id: contact.id,
      phone: contact.phone,
      email: contact.email,
      name: contact.name,
      category: {
        id: contact.category_id,
        name: contact.category_name,
      },
    }
  }
}

const contactMapper = new ContactMapper()

export { contactMapper }
