export type Contact = {
  category_id: string
  category_name: string
  email: string
  id: string
  name: string
  phone: string
}

export type OrderBy = 'asc' | 'desc'

type ContactResponse = Promise<Contact[]>

class ContactsService {
  async listContacts (orderBy: OrderBy = 'asc'): ContactResponse {
    const response = await fetch(`http://localhost:3333/contacts?orderBy=${orderBy}`)
    return response.json()
  }
}

export default new ContactsService()
