export interface Product {
  id: number
  title: string
  price: number
  description: string
  image: string
  category: string
  rating?: {
    rate: number
    count: number
  }
}

export interface ProductState {
  products: Product[]
  loading: boolean
  error: string | null
  filters: {
    category: string
    priceRange: [number, number]
    search: string
  }
}

export interface PaginationState {
  currentPage: number
  itemsPerPage: number
}
