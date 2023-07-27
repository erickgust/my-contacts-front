import { ContactFormData, contactMapper, ContactResponse } from './mappers/contact-mapper'
import { HttpClient } from './utils/http'

export type OrderBy = 'asc' | 'desc'

class ContactsService {
  httpClient: HttpClient

  constructor () {
    this.httpClient = new HttpClient('http://localhost:3333')
  }

  async listContacts (orderBy: OrderBy = 'asc', signal?: AbortSignal) {
    const contacts: ContactResponse[] = await this.httpClient.get(
      `/contacts?orderBy=${orderBy}`,
      { signal },
    )

    return contacts.map(contactMapper.toDomain)
  }

  async getContactById (id: string, signal?: AbortSignal) {
    const contact: ContactResponse = await this.httpClient.get(`/contacts/${id}`, { signal })

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
