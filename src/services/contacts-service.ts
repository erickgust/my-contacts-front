import { ContactFormData, contactMapper, ContactResponse } from './mappers/ContactMapper'
import { HttpClient } from './utils/http'

export type OrderBy = 'asc' | 'desc'

class ContactsService {
  httpClient: HttpClient

  constructor () {
    this.httpClient = new HttpClient('http://localhost:3333')
  }

  async listContacts (orderBy: OrderBy = 'asc') {
    const contacts: ContactResponse[] = await this.httpClient.get(
      `/contacts?orderBy=${orderBy}`,
    )

    return contacts.map(contactMapper.toDomain)
  }

  async getContactById (id: string) {
    const contact: ContactResponse = await this.httpClient.get(`/contacts/${id}`)

    return contactMapper.toDomain(contact)
  }

  createContact (contact: ContactFormData) {
    const body = contactMapper.toPersistence(contact)
    return this.httpClient.post('/contacts', { body })
  }

  updateContact (id: string, contact: ContactFormData) {
    const body = contactMapper.toPersistence(contact)
    return this.httpClient.put(`/contacts/${id}`, { body })
  }

  deleteContact (id: string) {
    return this.httpClient.delete(`/contacts/${id}`)
  }
}

const contactsService = new ContactsService()

export default contactsService
