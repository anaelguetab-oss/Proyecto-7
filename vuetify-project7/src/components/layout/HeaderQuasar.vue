<template>
  <q-header elevated class="bg-primary text-white">
    <q-toolbar>
      <!-- Logo -->
      <q-toolbar-title>
        🛒 Quasar Tienda
      </q-toolbar-title>

      <!-- Search Bar -->
      <q-input
        v-model="searchQuery"
        outlined
        dense
        dark
        placeholder="Buscar productos..."
        class="q-mx-md"
        style="width: 300px"
      >
        <template #prepend>
          <q-icon name="search" />
        </template>
      </q-input>

      <q-space />

      <!-- Theme Toggle -->
      <q-btn
        flat
        dense
        round
        icon="dark_mode"
        @click="toggleDarkMode"
      >
        <q-tooltip>Modo oscuro</q-tooltip>
      </q-btn>

      <!-- Cart Button -->
      <q-btn
        flat
        dense
        round
        icon="shopping_cart"
        @click="openCart"
      >
        <q-badge
          v-if="cartStore.itemCount > 0"
          color="negative"
          floating
          rounded
        >
          {{ cartStore.itemCount }}
        </q-badge>
        <q-tooltip>Carrito ({{ cartStore.itemCount }} items)</q-tooltip>
      </q-btn>

      <!-- Menu -->
      <q-btn flat dense round icon="more_vert">
        <q-menu>
          <q-list style="min-width: 200px">
            <q-item clickable v-ripple>
              <q-item-section>Mi Cuenta</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section>Pedidos</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-ripple>
              <q-item-section>Cerrar Sesión</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </q-toolbar>

    <!-- Secondary toolbar with stats -->
    <q-separator />
    <q-toolbar class="bg-secondary text-white">
      <q-icon name="info" class="q-mr-md" />
      <span>
        {{ productStore.stats.totalProducts }} productos | 
        {{ productStore.stats.categories }} categorías | 
        Total: {{ formatCurrency(Number(cartStore.finalPrice)) }}
      </span>
      <q-space />
      <q-circular-progress
        :value="(productStore.stats.filteredCount / productStore.stats.totalProducts) * 100"
        size="50px"
        :thickness="0.15"
        color="white"
        track-color="rgba(255, 255, 255, 0.2)"
      >
        <span class="text-white text-caption">
          {{ productStore.stats.filteredCount }}
        </span>
      </q-circular-progress>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import { useProductStore } from '@/stores/productStore'
import { useCartStore } from '@/stores/cartStore'

const $q = useQuasar()
const productStore = useProductStore()
const cartStore = useCartStore()
const searchQuery = ref('')

const emit = defineEmits(['open-cart'])

const toggleDarkMode = () => {
  $q.dark.toggle()
}

const openCart = () => {
  emit('open-cart')
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
  }).format(value)
}

onMounted(() => {
  console.log('📦 Header Quasar montado - Tienda lista')
})
</script>

<style scoped lang="scss">
.q-toolbar {
  height: auto;
  min-height: 60px;
}

:deep(.q-input__control) {
  color: white;
}

:deep(.q-input__native),
:deep(.q-input__native::placeholder) {
  color: rgba(255, 255, 255, 0.7);
}
</style>
