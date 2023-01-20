import { APIError } from '@/errors/api-error'
import { delay } from '@/utils/delay'

class HttpClient {
  baseUrl: string

  constructor (baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async get (path: string) {
    await delay(500)

    const response = await fetch(this.baseUrl + path)
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
}

export { HttpClient }
