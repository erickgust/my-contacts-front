export type ContactFormData = {
  phone: string
  email: string
  name: string
  categoryId: string
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
}

const contactMapper = new ContactMapper()

export { contactMapper }
