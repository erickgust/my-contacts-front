import { APIError } from '@/errors/api-error'
import { delay } from '@/utils/delay'

type Options = {
  body?: Record<string, unknown>
} & Omit<RequestInit, 'body'>

class HttpClient {
  baseUrl: string

  constructor (baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async request (path: string, options?: RequestInit) {
    await delay(500)

    const response = await fetch(this.baseUrl + path, options)
    const contentType = response.headers.get('Content-Type')

    if (response.status === 204) {
      return
    }

    if (!contentType?.includes('application/json')) {
      throw new APIError(response)
    }

    const body = await response.json()

    if (response.ok) {
      return body
    }

    throw new APIError(response, body)
  }

  createRequest (method: string) {
    return (path: string, options?: Options) => {
      return this.request(path, {
        method,
        body: JSON.stringify(options?.body),
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        signal: options?.signal,
      })
    }
  }

  get (path: string, options?: Options) {
    return this.request(path, {
      headers: options?.headers,
      signal: options?.signal,
    })
  }

  post (path: string, options?: Options) {
    const request = this.createRequest('POST')
    return request(path, options)
  }

  put (path: string, options?: Options) {
    const request = this.createRequest('PUT')
    return request(path, options)
  }

  delete (path: string, options?: Options) {
    return this.request(path, {
      method: 'DELETE',
      headers: options?.headers,
    })
  }
}

export { HttpClient }
