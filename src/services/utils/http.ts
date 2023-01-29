import { APIError } from '@/errors/api-error'
import { delay } from '@/utils/delay'

class HttpClient {
  baseUrl: string

  constructor (baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async request (path: string, options?: RequestInit) {
    await delay(500)

    const response = await fetch(this.baseUrl + path, options)
    const contentType = response.headers.get('Content-Type')

    if (!contentType?.includes('application/json')) {
      throw new APIError(response)
    }

    const body = await response.json()

    if (response.ok) {
      return body
    }

    throw new APIError(response, body)
  }

  createRequest <T> (method: string) {
    return (path: string, body: T) => {
      return this.request(path, {
        method,
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
  }

  get (path: string) {
    return this.request(path)
  }

  post <T> (path: string, body: T) {
    const request = this.createRequest('POST')
    return request(path, body)
  }

  put <T> (path: string, body: T) {
    const request = this.createRequest('PUT')
    return request(path, body)
  }
}

export { HttpClient }
