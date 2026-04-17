<template>
  <v-card class="product-card">
    <v-img :src="product.image" :alt="product.title" height="250" cover class="product-image" />

    <v-card-title class="text-subtitle2 text-truncate">{{ product.title }}</v-card-title>

    <v-card-text>
      <div class="product-meta">
        <span class="badge">{{ translateCategory(product.category) }}</span>
        <div v-if="product.rating" class="rating">
          <v-icon icon="mdi-star" color="amber" size="small"></v-icon>
          <span class="text-caption">{{ product.rating.rate }}</span>
          <span class="text-caption text-grey">({{ product.rating.count }})</span>
        </div>
      </div>

      <p class="text-caption text-grey line-clamp-2">{{ product.description }}</p>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="justify-space-between">
      <div class="price">
        <span class="text-h6 font-weight-bold">CLP$ {{ (product.price * 850).toLocaleString('es-CL', { maximumFractionDigits: 0 }) }}</span>
      </div>
      <div class="card-actions">
        <v-btn
          :icon="inCart ? 'mdi-cart-check' : 'mdi-cart-plus'"
          :color="inCart ? 'success' : 'primary'"
          variant="flat"
          size="small"
          @click.prevent="handleAddToCart"
        >
          {{ inCart ? 'En carrito' : 'Agregar' }}
        </v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { useCart } from '@/composables/useCart'
import { translateCategory } from '@/utils/translations'
import type { Product } from '@/types/product'

const props = defineProps<{
  product: Product
}>()

const { addProduct, hasProduct } = useCart()

const inCart = computed(() => hasProduct(props.product.id))

const handleAddToCart = () => {
  addProduct(props.product)
}

// Ciclo de vida: Montado
onMounted(() => {
  console.log('🛍️ ProductCard montado -', props.product.title.substring(0, 30))
})

// Ciclo de vida: Observar cambios en si está en carrito
watch(inCart, (newVal, oldVal) => {
  if (newVal && !oldVal) {
    console.log('✅ Producto agregado al carrito:', props.product.title.substring(0, 30))
  }
})
</script>

<style scoped lang="scss">
.product-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }

  .product-image {
    background: #f5f5f5;
  }

  .product-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    gap: 8px;

    .badge {
      background: #e3f2fd;
      color: #1976d2;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.7rem;
      font-weight: 600;
      text-transform: uppercase;
    }

    .rating {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }

  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .price {
    display: flex;
    flex-direction: column;
  }
}
</style>
