import { HttpClient } from './utils/http'

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
  httpClient: HttpClient

  constructor () {
    this.httpClient = new HttpClient('http://localhost:3333')
  }

  async listContacts (orderBy: OrderBy = 'asc'): ContactResponse {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`)
  }
}

const contactsService = new ContactsService()

export default contactsService
