<template>
  <v-navigation-drawer
    v-model="isOpen"
    location="right"
    temporary
    width="400"
    class="cart-drawer"
  >
    <template #prepend>
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title class="font-weight-bold">
          <v-icon icon="mdi-cart" class="mr-2"></v-icon>
          Mi Carrito
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon="mdi-close" variant="plain" @click="isOpen = false"></v-btn>
      </v-toolbar>
    </template>

    <!-- Lista de items -->
    <div v-if="items.length > 0" class="cart-items">
      <v-divider></v-divider>
      <div v-for="item in items" :key="item.product.id" class="cart-item">
        <v-list-item>
          <template #prepend>
            <v-img :src="item.product.image" width="60" height="60" class="cart-item-image"></v-img>
          </template>

          <v-list-item-title class="text-subtitle2 font-weight-bold">
            {{ item.product.title }}
          </v-list-item-title>

          <v-list-item-subtitle>
            <span class="text-h6 font-weight-bold text-primary">
              CLP$ {{ ((item.product.price * 850) * item.quantity).toLocaleString('es-CL', { maximumFractionDigits: 0 }) }}
            </span>
          </v-list-item-subtitle>

          <template #append>
            <v-btn icon="mdi-delete" size="small" variant="plain" @click="removeItem(item.product.id)"></v-btn>
          </template>
        </v-list-item>

        <!-- Controles de cantidad -->
        <div class="quantity-control mx-4 mb-2">
          <v-btn
            icon="mdi-minus"
            size="x-small"
            variant="outlined"
            @click="decreaseQuantity(item.product.id)"
          ></v-btn>
          <span class="mx-2 font-weight-bold">{{ item.quantity }}</span>
          <v-btn
            icon="mdi-plus"
            size="x-small"
            variant="outlined"
            @click="increaseQuantity(item.product.id)"
          ></v-btn>
          <span class="text-caption text-grey ml-2">× CLP$ {{ (item.product.price * 850).toLocaleString('es-CL', { maximumFractionDigits: 0 }) }}</span>
        </div>

        <v-divider class="my-2"></v-divider>
      </div>
    </div>

    <!-- Carrito vacío -->
    <v-empty-state
      v-else
      headline="Carrito Vacío"
      text="Agrega productos para comenzar"
      icon="mdi-cart-off"
      class="mt-8"
    ></v-empty-state>

    <!-- Resumen -->
    <template v-if="items.length > 0" #append>
      <div class="cart-summary pa-4">
        <v-divider class="mb-4"></v-divider>

        <!-- Detalles de precio -->
        <div class="summary-row mb-2">
          <span class="text-subtitle2">Subtotal:</span>
          <span class="text-subtitle2 font-weight-bold">CLP$ {{ (totalPrice * 850).toLocaleString('es-CL', { maximumFractionDigits: 0 }) }}</span>
        </div>

        <div class="summary-row mb-4">
          <span class="text-subtitle2">Impuesto (10%):</span>
          <span class="text-subtitle2 font-weight-bold">CLP$ {{ (tax * 850).toLocaleString('es-CL', { maximumFractionDigits: 0 }) }}</span>
        </div>

        <v-divider class="mb-4"></v-divider>

        <div class="summary-row mb-4">
          <span class="text-h6 font-weight-bold">Total:</span>
          <span class="text-h6 font-weight-bold text-primary">CLP$ {{ (finalPrice * 850).toLocaleString('es-CL', { maximumFractionDigits: 0 }) }}</span>
        </div>

        <!-- Botones de acción -->
        <v-btn block color="primary" size="large" class="mb-2" @click="checkout">
          <v-icon icon="mdi-checkout" class="mr-2"></v-icon>
          Proceder al Pago
        </v-btn>

        <v-btn block variant="outlined" @click="clearCartItems">
          <v-icon icon="mdi-trash-can" class="mr-2"></v-icon>
          Vaciar Carrito
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()
const isOpen = ref(false)

const { items, totalPrice, tax, finalPrice, removeFromCart, updateQuantity } = cartStore

const removeItem = (productId: number) => {
  removeFromCart(productId)
}

const increaseQuantity = (productId: number) => {
  const item = cartStore.getCartItem(productId)
  if (item) {
    updateQuantity(productId, item.quantity + 1)
  }
}

const decreaseQuantity = (productId: number) => {
  const item = cartStore.getCartItem(productId)
  if (item && item.quantity > 1) {
    updateQuantity(productId, item.quantity - 1)
  }
}

const clearCartItems = () => {
  cartStore.clearCart()
}

const checkout = () => {
  const amount = typeof finalPrice === 'number' ? finalPrice : (finalPrice as any).value
  const clpAmount = (amount * 850).toLocaleString('es-CL', { maximumFractionDigits: 0 })
  alert(`Proceden al pago por: CLP$ ${clpAmount}`)
  cartStore.clearCart()
  isOpen.value = false
}

// Expone isOpen para que el padre pueda controlar el drawer
defineExpose({ isOpen })
</script>

<style scoped lang="scss">
.cart-drawer {
  display: flex;
  flex-direction: column;

  .cart-items {
    flex: 1;
    overflow-y: auto;

    .cart-item {
      transition: background-color 0.2s;

      &:hover {
        background-color: rgba(0, 0, 0, 0.02);
      }

      .cart-item-image {
        border-radius: 4px;
        object-fit: contain;
      }

      .quantity-control {
        display: flex;
        align-items: center;
        gap: 4px;
      }
    }
  }

  .cart-summary {
    background: #f5f5f5;
    border-top: 1px solid #e0e0e0;

    .summary-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
