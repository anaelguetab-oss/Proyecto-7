<template>
  <v-btn
    :icon="`mdi-cart${isBadge ? '-arrow-down' : ''}`"
    :color="itemCount > 0 ? 'accent' : 'default'"
    @click="openCart"
  >
    <!-- Badge con número de items -->
    <v-badge
      v-if="itemCount > 0"
      :content="itemCount"
      color="red"
      floating
      class="cart-badge"
    >
    </v-badge>
  </v-btn>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()

const itemCount = computed(() => cartStore.itemCount)
const isBadge = computed(() => cartStore.itemCount > 0)

const openCart = () => {
  // Emite evento para que el padre abra el drawer
  defineExpose({ openCart })
  window.dispatchEvent(new CustomEvent('open-cart'))
}
</script>

<style scoped lang="scss">
.cart-badge {
  :deep(.v-badge__badge) {
    animation: pulse 1s infinite;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
