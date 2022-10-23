import { delay } from '../../utils/Time'
import ApiError from '../../errors/ApiError'
export default class HttpClient {
  constructor(baseUrl) {
    this.baseURL = baseUrl
  }

  async get(path) {
    await delay(1000)
    const response = await fetch(`${this.baseURL}${path}`)
    // O ok contém o valor boolean que diz o o nosso status está no range esperado.
    let body = null
    const contentType = response.headers.get('Content-Type')

    if (contentType.includes('application/json')) {
      body = await response.json()
    }

    if (response.ok) {
      return body
    }
    throw new ApiError(response, body)
  }

  async post(path, payload){
    const headers = new Headers({
      'Content-type': 'application/json'
    })
    await delay(3000);
    const response = await fetch(`${this.baseURL}${path}`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers,
      }
    );

    let body = null;
    const contentType = response.headers.get('Content-Type');
    if(contentType.includes('application/json')){
      body = await response.json();
    }

    if(response.ok){
      return body;
    }
    throw new ApiError(response, body)

  }
}
