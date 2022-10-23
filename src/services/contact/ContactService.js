import HttpClient from '../utils/HttpClient'

class ContactService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001')
  }
  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`)
  }

  async createContact(payload){
    return this.httpClient.post('/contacts', payload)
  }
}

export default new ContactService()
