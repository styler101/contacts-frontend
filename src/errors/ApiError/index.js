class ApiError extends Error {
  constructor(response, body) {
    super()
    this.body = body
    this.response = response
    this.message = body?.error || `${response.status} - ${response.statusText}`
  }
}

export default ApiError
