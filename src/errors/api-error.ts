type Body = {
  error: string
}

class APIError extends Error {
  body?: Body
  response: Response

  constructor (response: Response, body?: Body) {
    super()

    this.body = body
    this.name = 'APIError'
    this.response = response
    this.message = body?.error || `${response.status} - ${response.statusText}`
  }
}

export { APIError }
