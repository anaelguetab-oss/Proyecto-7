<template>
  <div class="product-list">
    <!-- Estado de carga -->
    <v-progress-linear v-if="loading" indeterminate></v-progress-linear>

    <!-- Mensaje de error -->
    <v-alert v-if="error" type="error" closable class="mb-4">
      {{ error }}
    </v-alert>

    <!-- Información de productos -->
    <div v-if="!loading" class="list-header mb-6">
      <h2 class="text-h5 font-weight-bold">Catálogo de Productos</h2>
      <p class="text-subtitle2 text-grey">
        Mostrando {{ filteredProducts.length }} de {{ stats.totalProducts }} productos
      </p>
    </div>

    <!-- Grid de productos -->
    <v-row v-if="filteredProducts.length > 0">
      <v-col v-for="product in filteredProducts" :key="product.id" cols="12" sm="6" md="4" lg="3">
        <ProductCard :product="product" />
      </v-col>
    </v-row>

    <!-- Mensaje de sin resultados -->
    <v-empty-state
      v-else-if="!loading && products.length > 0"
      headline="Sin productos"
      text="No se encontraron productos que coincidan con tus filtros"
      icon="mdi-package-off"
    >
      <template #actions>
        <v-btn color="primary" @click="$emit('reset-filters')"> Limpiar filtros </v-btn>
      </template>
    </v-empty-state>

    <!-- Mensaje de cargando inicial -->
    <v-skeleton-loader v-if="loading" type="image, paragraph" :count="8"></v-skeleton-loader>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onBeforeUpdate } from 'vue'
import { useProducts } from '@/composables/useProducts'
import ProductCard from './ProductCard.vue'

defineEmits<{
  'reset-filters': []
}>()

const { products, filteredProducts, loading, error, stats } = useProducts()

// Ciclo de vida: Montado
onMounted(() => {
  console.log('📋 ProductList montado - Productos cargados:', products.value.length)
})

// Ciclo de vida: Antes de actualizar (cuando cambian filtros)
onBeforeUpdate(() => {
  console.log('🔄 ProductList actualizando - Productos filtrados:', filteredProducts.value.length)
})
</script>

<style scoped lang="scss">
.product-list {
  .list-header {
    padding-bottom: 16px;
    border-bottom: 1px solid #e0e0e0;

    h2 {
      margin-bottom: 8px;
    }
  }
}
</style>
