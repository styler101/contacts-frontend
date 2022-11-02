import { delay } from '../../utils/Time'
import ApiError from '../../errors/ApiError'

export default class HttpClient {
  constructor(baseUrl) {
    this.baseURL = baseUrl
  }

  get(path, options) {
    return this.makeRequest(path, {
      method: 'GET',
      headers: options?.headers,
    })
  }

  post(path, options) {
    return this.makeRequest(path, {
      method: 'POST',
      body: options?.body,
      headers: options?.headers,
    })
  }

  put(path, payload) {
    return this.makeRequest(path, { method: 'PUT', body: payload })
  }

  delete(path, options) {
    return this.makeRequest(path, { method: 'DELETE', options })
  }

  async makeRequest(path, options = {}) {
    await delay(500)
    const headers = new Headers()

    if (options.body) {
      headers.append('Content-Type', 'application/json')
    }
    if (options.headers) {
      // 1 - Form a de criar
      // Object.keys(options.headers).forEach((headerName) =>  headers.append(headerName, options.headers[headerName]))
      // 2 Maneira de criar a forma de abstrair os headers.
      Object.entries(options.headers).forEach(([key, value]) =>
        headers.append(key, value)
      )
    }

    const response = await fetch(`${this.baseURL}${path}`, {
      method: options.method,
      body: JSON.stringify(options.body),
      headers,
    })

    let responseBody = null
    const contentType = response.headers.get('Content-Type')
    if (contentType?.includes('application/json')) {
      responseBody = await response.json()
    }

    if (response.ok) {
      return responseBody
    }

    throw new ApiError(response, responseBody)
  }
}
