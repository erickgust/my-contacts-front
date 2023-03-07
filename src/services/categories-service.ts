import { Category, categoryMapper } from './mappers/category-mapper'
import { HttpClient } from './utils/http'

class CategoriesService {
  httpClient: HttpClient

  constructor () {
    this.httpClient = new HttpClient('http://localhost:3333')
  }

  async listCategories () {
    const categories: Category[] = await this.httpClient.get('/categories')

    return categories.map(categoryMapper.toDomain)
  }
}

const categoriesService = new CategoriesService()

export default categoriesService
