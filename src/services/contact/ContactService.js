import HttpClient from '../utils/HttpClient'
import ContactMapper from '../mappers/ContactMapper'
class ContactService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001')
  }
  async listContacts(orderBy = 'asc') {
    const contacts = await this.httpClient.get(`/contacts?orderBy=${orderBy}`)
    return contacts.map(ContactMapper.toDomain)
  }

  async getContactById(id) {
    const contact = await this.httpClient.get(`/contacts/${id}`)
    return ContactMapper.toDomain(contact)
  }

  createContact(payload) {
    const contact = ContactMapper.toPersistence(payload)
    return this.httpClient.post('/contacts', contact)
  }

  updateContact(id, payload) {
    const updateContact = ContactMapper.toPersistence(payload)
    return this.httpClient.put(`/contacts/${id}`, updateContact)
  }

  deleteContact(id) {
    return this.httpClient.delete(`/contacts/${id}`)
  }
}

export default new ContactService()
