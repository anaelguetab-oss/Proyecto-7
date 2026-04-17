<template>
  <v-app-bar color="primary" dark flat class="header">
    <v-app-bar-title class="font-weight-bold">
      <v-icon icon="mdi-store" class="mr-2"></v-icon>
      Mi Tienda Virtual
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <!-- Información del catálogo -->
    <div class="header-info">
      <v-chip label size="small" class="mr-3">
        <v-icon icon="mdi-box" size="small" class="mr-1"></v-icon>
        {{ stats.totalProducts }} Productos
      </v-chip>
    </div>

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
        <v-badge v-if="itemCount > 0" :content="itemCount" color="error" floating class="badge-cart"></v-badge>
      </v-btn>
    </div>

    <v-btn icon="mdi-theme-light-dark" @click="$vuetify.theme.cycle()" class="ml-2"></v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import { useProducts } from '@/composables/useProducts'
import { useCart } from '@/composables/useCart'

const { stats } = useProducts()
const { itemCount } = useCart()

// Ciclo de vida: Montado
onMounted(() => {
  console.log('📦 Header montado - Tienda lista')
})

// Ciclo de vida: Desmontado
onUnmounted(() => {
  console.log('📦 Header desmontado')
})

const emit = defineEmits<{
  'open-cart': []
}>()

const openCart = () => {
  emit('open-cart')
}
</script>

<style scoped>
.header {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-info {
  display: flex;
  align-items: center;
  gap: 12px;
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
  0%,
  100% {
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
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
}
</style>
