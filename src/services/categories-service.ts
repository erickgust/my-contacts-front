import { HttpClient } from './utils/http'

export type Category = {
  id: string
  name: string
}

type CategoryResponse = Promise<Category[]>

class CategoriesService {
  httpClient: HttpClient

  constructor () {
    this.httpClient = new HttpClient('http://localhost:3333')
  }

  async listCategories (): CategoryResponse {
    return this.httpClient.get('/categories')
  }
}

const categoriesService = new CategoriesService()

export default categoriesService
