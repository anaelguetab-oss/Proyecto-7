import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { Product } from '@/types/product'

class ProductAPI {
  private api: AxiosInstance

  constructor() {
    // Usando API de prueba: https://fakestoreapi.com
    this.api = axios.create({
      baseURL: 'https://fakestoreapi.com/products',
      timeout: 10000,
    })
  }

  /**
   * Obtiene todos los productos
   */
  async getAllProducts(): Promise<Product[]> {
    try {
      const response = await this.api.get<Product[]>('')
      return response.data
    } catch (error) {
      console.error('Error fetching products:', error)
      throw new Error('Failed to fetch products')
    }
  }

  /**
   * Obtiene un producto por ID
   */
  async getProductById(id: number): Promise<Product> {
    try {
      const response = await this.api.get<Product>(`/${id}`)
      return response.data
    } catch (error) {
      console.error('Error fetching product:', error)
      throw new Error(`Failed to fetch product with ID ${id}`)
    }
  }

  /**
   * Obtiene productos por categoría
   */
  async getProductsByCategory(category: string): Promise<Product[]> {
    try {
      const response = await this.api.get<Product[]>(`/category/${category}`)
      return response.data
    } catch (error) {
      console.error('Error fetching products by category:', error)
      throw new Error(`Failed to fetch products for category ${category}`)
    }
  }

  /**
   * Obtiene todas las categorías disponibles
   */
  async getCategories(): Promise<string[]> {
    try {
      const response = await this.api.get<string[]>('/categories')
      return response.data
    } catch (error) {
      console.error('Error fetching categories:', error)
      throw new Error('Failed to fetch categories')
    }
  }
}

export const productAPI = new ProductAPI()
