<template>
  <v-card class="filter-card">
    <v-card-title> Filtros </v-card-title>

    <v-divider></v-divider>

    <v-card-text>
      <!-- Búsqueda -->
      <div class="filter-section mb-6">
        <label class="text-subtitle2 font-weight-bold mb-2 d-block"> Buscar </label>
        <v-text-field
          :model-value="searchQuery"
          placeholder="Buscar por nombre..."
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          density="compact"
          clearable
          @update:model-value="updateSearch"
        ></v-text-field>
      </div>

      <!-- Categorías -->
      <div class="filter-section mb-6">
        <label class="text-subtitle2 font-weight-bold mb-2 d-block"> Categorías </label>
        <v-checkbox
          v-for="category in categories"
          :key="category"
          :label="category"
          :model-value="selectedCategory === category"
          @update:model-value="(val) => handleCategoryChange(category, val)"
          density="compact"
        ></v-checkbox>
      </div>

      <!-- Rango de precios -->
      <div class="filter-section mb-6">
        <label class="text-subtitle2 font-weight-bold mb-2 d-block">
          Precio: ${{ priceRange[0] }} - ${{ priceRange[1] }}
        </label>
        <v-range-slider
          :model-value="priceRange"
          :min="0"
          :max="1000"
          :step="10"
          color="primary"
          @update:model-value="updatePriceRange"
        ></v-range-slider>
      </div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn block variant="outlined" @click="handleReset"> Limpiar filtros </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { useProducts } from '@/composables/useProducts'

const { categories, selectedCategory, priceRange, searchQuery, search, filterByCategory, filterByPrice, reset } =
  useProducts()

const updateSearch = (value: string) => {
  search(value)
}

const handleCategoryChange = (category: string, isSelected: boolean | null) => {
  if (isSelected) {
    filterByCategory(category)
  } else {
    filterByCategory('')
  }
}

const updatePriceRange = (value: [number, number]) => {
  filterByPrice(value[0], value[1])
}

const handleReset = () => {
  reset()
}
</script>

<style scoped lang="scss">
.filter-card {
  .filter-section {
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
