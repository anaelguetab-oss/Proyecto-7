import { computed } from 'vue'
import { useProductStore } from '@/stores/productStore'

/**
 * Composable para manejar la lógica de productos
 * Proporciona acceso simplificado a la tienda de productos
 */
export const useProducts = () => {
  const store = useProductStore()

  // Getters computados
  const products = computed(() => store.products)
  const filteredProducts = computed(() => store.filteredProducts)
  const loading = computed(() => store.loading)
  const error = computed(() => store.error)
  const categories = computed(() => store.categories)
  const stats = computed(() => store.stats)

  // Estado reactivo del store (para v-model)
  const selectedCategory = computed(() => store.selectedCategory)
  const priceRange = computed(() => store.priceRange)
  const searchQuery = computed(() => store.searchQuery)

  // Métodos
  const loadProducts = async () => {
    await store.fetchProducts()
  }

  const loadCategories = async () => {
    await store.fetchCategories()
  }

  const search = (query: string) => {
    store.setSearchQuery(query)
  }

  const filterByCategory = (category: string) => {
    store.filterByCategory(category)
  }

  const filterByPrice = (min: number, max: number) => {
    store.setPriceRange(min, max)
  }

  const reset = () => {
    store.clearFilters()
  }

  const getProduct = (id: number) => {
    return store.getProductById(id)
  }

  return {
    // State
    products,
    filteredProducts,
    loading,
    error,
    categories,
    stats,
    selectedCategory,
    priceRange,
    searchQuery,

    // Methods
    loadProducts,
    loadCategories,
    search,
    filterByCategory,
    filterByPrice,
    reset,
    getProduct,
  }
}
