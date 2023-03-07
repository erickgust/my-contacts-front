export type Category = {
  id: string
  name: string
}

class CategoryMapper {
  toDomain (category: Category) {
    return {
      id: category.id,
      name: category.name,
    }
  }
}

const categoryMapper = new CategoryMapper()

export { categoryMapper }
