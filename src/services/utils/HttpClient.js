import { delay } from '../../utils/Time'

export default class HttpClient {
  constructor(baseUrl) {
    this.baseURL = baseUrl
  }

  async get(path) {
    await delay(1000)
    const response = await fetch(`${this.baseURL}${path}`)
    // O ok contém o valor boolean que diz o o nosso status está no range esperado.
    if (response.ok) {
      return response.json()
    }

    throw new Error(`${response.status} - ${response.statusText}`)
  }
}
