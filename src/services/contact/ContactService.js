import { delay } from '../../utils/Time'

class ContactService {
  async listContacts(orderBy = 'ASC') {
    const responseData = await fetch(
      `http://localhost:3001/contacts?orderBy=${orderBy}`
    )
    const response = await responseData.json()
    await delay(5000)
    return response
  }
}

export default new ContactService()
