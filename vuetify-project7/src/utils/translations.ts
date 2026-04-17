/**
 * Traducciones de categorías
 */
export const categoryTranslations: Record<string, string> = {
  electronics: 'Electrónica',
  jewelery: 'Joyería',
  "men's clothing": 'Ropa para Hombres',
  "women's clothing": 'Ropa para Mujeres',
  clothing: 'Ropa',
  accessories: 'Accesorios',
  books: 'Libros',
  toys: 'Juguetes',
}

/**
 * Traduce una categoría del inglés al español
 */
export const translateCategory = (category: string): string => {
  return categoryTranslations[category.toLowerCase()] || category
}

/**
 * Traduce un array de categorías
 */
export const translateCategories = (categories: string[]): string[] => {
  return categories.map(translateCategory)
}
