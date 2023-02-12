import { HttpClient } from './utils/http'

export type Contact = {
  category_id: string
  category_name: string
  email: string
  id: string
  name: string
  phone: string
}

type ContactData = Omit<Contact, 'category_name' | 'id'>
type ContactResponse = Promise<Contact[]>

export type OrderBy = 'asc' | 'desc'

class ContactsService {
  httpClient: HttpClient

  constructor () {
    this.httpClient = new HttpClient('http://localhost:3333')
  }

  listContacts (orderBy: OrderBy = 'asc'): ContactResponse {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`)
  }

  getContactById (id: string): Promise<Contact> {
    return this.httpClient.get(`/contacts/${id}`)
  }

  createContact (contact: ContactData) {
    return this.httpClient.post('/contacts', { body: contact })
  }
}

const contactsService = new ContactsService()

export default contactsService
