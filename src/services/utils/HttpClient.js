import { delay } from '../../utils/Time'

export default class HttpClient {
  constructor(baseUrl) {
    this.baseURL = baseUrl
  }

  async get(path) {
    const responseData = await fetch(`${this.baseURL}${path}`)
    const response = await responseData.json()
    await delay(1000)
    return response
  }
}
