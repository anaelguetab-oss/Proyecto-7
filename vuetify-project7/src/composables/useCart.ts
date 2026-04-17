import { computed } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import type { Product } from '@/types/product'

/**
 * Composable para manejar la lógica del carrito
 */
export const useCart = () => {
  const store = useCartStore()

  // Computed
  const items = computed(() => store.items)
  const itemCount = computed(() => store.itemCount)
  const totalPrice = computed(() => store.totalPrice)
  const tax = computed(() => store.tax)
  const finalPrice = computed(() => store.finalPrice)

  // Methods
  const addProduct = (product: Product, quantity: number = 1) => {
    store.addToCart(product, quantity)
  }

  const removeProduct = (productId: number) => {
    store.removeFromCart(productId)
  }

  const updateProductQuantity = (productId: number, quantity: number) => {
    store.updateQuantity(productId, quantity)
  }

  const empty = () => {
    store.clearCart()
  }

  const getItem = (productId: number) => {
    return store.getCartItem(productId)
  }

  const hasProduct = (productId: number) => {
    return store.isInCart(productId)
  }

  const checkout = (totalAmount: number) => {
    console.log(`Checkout: $${totalAmount.toFixed(2)}`)
    empty()
  }

  return {
    // State
    items,
    itemCount,
    totalPrice,
    tax,
    finalPrice,

    // Methods
    addProduct,
    removeProduct,
    updateProductQuantity,
    empty,
    getItem,
    hasProduct,
    checkout,
  }
}
