<template>
  <q-card flat bordered class="product-card">
    <!-- Image Section -->
    <q-img
      :src="product.image"
      :alt="product.title"
      class="product-image"
      style="height: 250px; object-fit: contain"
    />

    <!-- Card Content -->
    <q-card-section class="text-center">
      <div class="text-overline text-grey">
        {{ translateCategory(product.category) }}
      </div>
      <div class="text-h6 q-mt-md q-mb-md">
        {{ product.title }}
      </div>

      <!-- Rating -->
      <q-rating
        v-if="product.rating"
        :model-value="product.rating.rate"
        size="sm"
        color="warning"
        readonly
      />
      <div class="text-caption text-grey q-mt-sm">
        ({{ product.rating?.count }} reseñas)
      </div>

      <!-- Price -->
      <div class="q-mt-md">
        <div class="text-h5 text-primary">
          {{ formatCurrency(product.price * 850) }}
        </div>
      </div>
    </q-card-section>

    <!-- Actions -->
    <q-separator />

    <q-card-actions align="center">
      <q-btn
        :unelevated="inCart"
        :color="inCart ? 'positive' : 'primary'"
        class="full-width"
        @click="toggleCart"
        :loading="isLoading"
      >
        <q-icon :name="inCart ? 'check_circle' : 'shopping_cart'" class="q-mr-sm" />
        {{ inCart ? 'En carrito' : 'Agregar' }}
      </q-btn>
    </q-card-actions>

    <!-- Hover Card Info -->
    <q-popup-proxy @before-show="onBeforeShow">
      <q-card class="q-pa-md" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Detalles</div>
          <div class="q-mt-md text-body2">
            {{ product.description }}
          </div>
          <div class="q-mt-md">
            <q-linear-progress
              :value="stock / 100"
              color="positive"
              size="8px"
            />
            <div class="text-caption q-mt-sm">
              Stock disponible: {{ stock }}/100
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-popup-proxy>
  </q-card>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import { useCartStore } from '@/stores/cartStore'
import { translateCategory } from '@/utils/translations'
import type { Product } from '@/types/product'

interface Props {
  product: Product
}

const props = defineProps<Props>()
const $q = useQuasar()
const cartStore = useCartStore()
const isLoading = ref(false)
const stock = ref(Math.floor(Math.random() * 100) + 1)

const inCart = computed(() => {
  return cartStore.isInCart(props.product.id)
})

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
  }).format(value)
}

const toggleCart = async () => {
  isLoading.value = true
  
  try {
    if (inCart.value) {
      cartStore.removeFromCart(props.product.id)
      $q.notify({
        type: 'info',
        message: 'Producto removido del carrito',
        position: 'top-right',
        timeout: 1500,
      })
    } else {
      cartStore.addToCart(props.product, 1)
      $q.notify({
        type: 'positive',
        message: '✅ Producto agregado al carrito',
        position: 'top-right',
        timeout: 1500,
      })
    }
  } finally {
    isLoading.value = false
  }
}

const onBeforeShow = () => {
  console.log('📊 Mostrando detalles de:', props.product.title.substring(0, 30))
}

watch(inCart, () => {
  if (inCart.value) {
    console.log('✅ Producto agregado al carrito:', props.product.title.substring(0, 30))
  }
})

onMounted(() => {
  console.log('🛍️ ProductCard Quasar montado -', props.product.title.substring(0, 30))
})
</script>

<style scoped lang="scss">
.product-card {
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
  }

  .product-image {
    background: #f5f5f5;
    padding: 16px;
  }

  :deep(.q-card__section) {
    flex: 1;
  }
}
</style>
