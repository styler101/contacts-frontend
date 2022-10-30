import HttpClient from '../utils/HttpClient'

class ContactService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001')
  }
   listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`, { headers: {
       'Authorization': 'Testando 1234',
        'Authorization2': 'Testando 1234'
      }})
  }

   getContactById(id){
    return this.httpClient.get(`/contacts/${id}`)
  }
   createContact(payload){
    return this.httpClient.post('/contacts', payload)
  }
}

export default new ContactService()
