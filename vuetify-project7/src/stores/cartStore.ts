import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Product } from '@/types/product'

export interface CartItem {
  product: Product
  quantity: number
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])

  /**
   * Agrega un producto al carrito
   */
  const addToCart = (product: Product, quantity: number = 1) => {
    const existingItem = items.value.find((item) => item.product.id === product.id)

    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      items.value.push({ product, quantity })
    }
  }

  /**
   * Elimina un producto del carrito
   */
  const removeFromCart = (productId: number) => {
    items.value = items.value.filter((item) => item.product.id !== productId)
  }

  /**
   * Actualiza la cantidad de un producto
   */
  const updateQuantity = (productId: number, quantity: number) => {
    const item = items.value.find((item) => item.product.id === productId)
    if (item) {
      if (quantity <= 0) {
        removeFromCart(productId)
      } else {
        item.quantity = quantity
      }
    }
  }

  /**
   * Limpia el carrito
   */
  const clearCart = () => {
    items.value = []
  }

  /**
   * Total de items en el carrito
   */
  const itemCount = computed(() => {
    return items.value.reduce((sum, item) => sum + item.quantity, 0)
  })

  /**
   * Precio total del carrito
   */
  const totalPrice = computed(() => {
    return items.value.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  })

  /**
   * Impuesto (10%)
   */
  const tax = computed(() => {
    return totalPrice.value * 0.1
  })

  /**
   * Precio final con impuesto
   */
  const finalPrice = computed(() => {
    return totalPrice.value + tax.value
  })

  /**
   * Obtiene un item del carrito
   */
  const getCartItem = (productId: number) => {
    return items.value.find((item) => item.product.id === productId)
  }

  /**
   * Verifica si un producto está en el carrito
   */
  const isInCart = (productId: number) => {
    return items.value.some((item) => item.product.id === productId)
  }

  return {
    // State
    items,

    // Actions
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,

    // Computed
    itemCount,
    totalPrice,
    tax,
    finalPrice,
    getCartItem,
    isInCart,
  }
})
