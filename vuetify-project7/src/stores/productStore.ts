import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Product, ProductState } from '@/types/product'
import { productAPI } from '@/api/productApi'
import { translateCategory, categoryTranslations } from '@/utils/translations'

export const useProductStore = defineStore('products', () => {
  // Estado
  const products = ref<Product[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  const categories = ref<string[]>([])
  const categoriesOriginal = ref<string[]>([]) // Guardar originales para filtrado

  // Filtros
  const selectedCategory = ref<string>('')
  const priceRange = ref<[number, number]>([0, 1000])
  const searchQuery = ref<string>('')

  // Acciones
  /**
   * Obtiene todos los productos desde la API
   */
  const fetchProducts = async () => {
    loading.value = true
    error.value = null
    try {
      const data = await productAPI.getAllProducts()
      products.value = data
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Unknown error occurred'
    } finally {
      loading.value = false
    }
  }

  const fetchCategories = async () => {
    try {
      const data = await productAPI.getCategories()
      categoriesOriginal.value = data
      categories.value = data.map(translateCategory)
    } catch (err) {
      console.error('Error fetching categories:', err)
    }
  }


  const filterByCategory = (category: string) => {
    selectedCategory.value = category
  }

  
  const setPriceRange = (min: number, max: number) => {
    priceRange.value = [min, max]
  }

  /**
   * Establece la búsqueda
   */
  const setSearchQuery = (query: string) => {
    searchQuery.value = query.toLowerCase()
  }

  /**
   * Limpia los filtros
   */
  const clearFilters = () => {
    selectedCategory.value = ''
    priceRange.value = [0, 1000]
    searchQuery.value = ''
  }

  // Computed - Productos filtrados
  const filteredProducts = computed(() => {
    return products.value.filter((product) => {
      // Filtro por categoría
      if (selectedCategory.value) {
        // Obtener la categoría original a partir de la traducida
        const selectedIndex = categories.value.indexOf(selectedCategory.value)
        const originalCategory = selectedIndex >= 0 ? categoriesOriginal.value[selectedIndex] : selectedCategory.value
        if (product.category !== originalCategory) {
          return false
        }
      }

      // Filtro por rango de precios
      if (product.price < priceRange.value[0] || product.price > priceRange.value[1]) {
        return false
      }

      // Filtro por búsqueda
      if (
        searchQuery.value &&
        !product.title.toLowerCase().includes(searchQuery.value) &&
        !product.description.toLowerCase().includes(searchQuery.value)
      ) {
        return false
      }

      return true
    })
  })

  // Computed - Estadísticas
  const stats = computed(() => ({
    totalProducts: products.value.length,
    filteredCount: filteredProducts.value.length,
    categories: categories.value.length,
    avgPrice:
      products.value.length > 0
        ? (products.value.reduce((sum, p) => sum + p.price, 0) / products.value.length).toFixed(2)
        : 0,
  }))

  // Computed - Producto por ID
  const getProductById = computed(() => {
    return (id: number) => products.value.find((p) => p.id === id)
  })

  return {
    // Estado
    products,
    loading,
    error,
    categories,
    selectedCategory,
    priceRange,
    searchQuery,

    // Acciones
    fetchProducts,
    fetchCategories,
    filterByCategory,
    setPriceRange,
    setSearchQuery,
    clearFilters,

    // Computed
    filteredProducts,
    stats,
    getProductById,
  }
})
