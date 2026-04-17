<template>
  <v-app>
    <v-app-bar color="primary" dark flat>
      <v-app-bar-title class="font-weight-bold">
        <v-icon icon="mdi-store" class="mr-2"></v-icon>
         Mi Tienda Virtual
      </v-app-bar-title>
      <v-spacer></v-spacer>
      
      <!-- Botón del carrito con icono mejorado -->
      <div class="cart-button-wrapper">
        <v-btn 
          :icon="itemCount > 0 ? 'mdi-cart-heart' : 'mdi-cart'"
          :color="itemCount > 0 ? 'warning' : 'white'"
          :size="itemCount > 0 ? 'large' : 'default'"
          variant="text"
          @click="openCart"
          class="cart-btn"
          :class="{ 'cart-active': itemCount > 0 }"
        >
          <v-badge
            v-if="itemCount > 0"
            :content="itemCount"
            color="error"
            floating
            class="badge-cart"
          ></v-badge>
        </v-btn>
      </div>

      <v-btn icon="mdi-theme-light-dark" @click="$vuetify.theme.cycle()" class="ml-2"></v-btn>
    </v-app-bar>

    <!-- Drawer del carrito -->
    <CartDrawer ref="cartDrawerRef" />

    <v-main class="bg-grey-100">
      <v-container fluid class="py-6">
        <v-row>
          <!-- Sidebar - Filtros (Hidden en mobile) -->
          <v-col cols="12" md="3" class="d-none d-md-block">
            <ProductFilter />
          </v-col>

          <!-- Main Content -->
          <v-col cols="12" md="9">
            <!-- Filtros en mobile -->
            <v-row class="d-md-none mb-6">
              <v-col cols="12">
                <v-expansion-panels>
                  <v-expansion-panel title="Filtros">
                    <template #text>
                      <ProductFilter />
                    </template>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-col>
            </v-row>

            <!-- Lista de productos -->
            <ProductList @reset-filters="handleResetFilters" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue'
import { useProducts } from '@/composables/useProducts'
import { useCart } from '@/composables/useCart'
import ProductFilter from '@/components/products/ProductFilter.vue'
import ProductList from '@/components/products/ProductList.vue'
import CartDrawer from '@/components/cart/CartDrawer.vue'

const { loadProducts, loadCategories, reset } = useProducts()
const { itemCount } = useCart()

const cartDrawerRef = ref<InstanceType<typeof CartDrawer> | null>(null)

// Cargar datos al montar el componente
onMounted(async () => {
  await Promise.all([loadProducts(), loadCategories()])
})

const handleResetFilters = () => {
  reset()
}

const openCart = () => {
  if (cartDrawerRef.value) {
    cartDrawerRef.value.isOpen = true
  }
}
</script>

<style>
body {
  background-color: #f5f5f5;
}

.cart-button-wrapper {
  position: relative;
}

.cart-btn {
  transition: all 0.3s ease;
  position: relative;
}

.cart-btn.cart-active {
  animation: cartPulse 0.6s ease-in-out;
}

@keyframes cartPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

:deep(.badge-cart .v-badge__badge) {
  font-weight: bold;
  font-size: 0.75rem;
  min-width: 20px;
  animation: badgePulse 1s infinite;
}

@keyframes badgePulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
}
</style>
