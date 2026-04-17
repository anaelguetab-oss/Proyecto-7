<template>
  <v-footer class="footer bg-primary text-white mt-12">
    <v-container>
      <v-row>
        <!-- Sección 1: Información -->
        <v-col cols="12" md="4" class="mb-4">
          <h3 class="font-weight-bold mb-3">
            <v-icon icon="mdi-store" class="mr-2"></v-icon>
            Mi Tienda Virtual
          </h3>
          <p class="text-caption">Tu tienda de productos en línea confiable, segura y con los mejores precios.</p>
        </v-col>

        <!-- Sección 2: Enlaces rápidos -->
        <v-col cols="12" md="4" class="mb-4">
          <h4 class="font-weight-bold mb-3">Enlaces Rápidos</h4>
          <ul class="list-unstyled text-caption">
            <li class="mb-2">
              <v-btn variant="text" size="small" color="white" prepend-icon="mdi-home"> Inicio </v-btn>
            </li>
            <li class="mb-2">
              <v-btn variant="text" size="small" color="white" prepend-icon="mdi-shopping-bag"> Productos </v-btn>
            </li>
            <li class="mb-2">
              <v-btn variant="text" size="small" color="white" prepend-icon="mdi-information"> Acerca de </v-btn>
            </li>
            <li class="mb-2">
              <v-btn variant="text" size="small" color="white" prepend-icon="mdi-email"> Contacto </v-btn>
            </li>
          </ul>
        </v-col>

        <!-- Sección 3: Redes sociales -->
        <v-col cols="12" md="4" class="mb-4">
          <h4 class="font-weight-bold mb-3">Síguenos</h4>
          <div class="social-links">
            <v-btn icon="mdi-facebook" variant="text" size="small" color="white"></v-btn>
            <v-btn icon="mdi-twitter" variant="text" size="small" color="white"></v-btn>
            <v-btn icon="mdi-instagram" variant="text" size="small" color="white"></v-btn>
            <v-btn icon="mdi-linkedin" variant="text" size="small" color="white"></v-btn>
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-4 bg-white-20"></v-divider>

      <!-- Copyright -->
      <div class="text-center py-4">
        <p class="text-caption mb-2">
          <strong>Métodos de Pago:</strong>
          <v-icon icon="mdi-credit-card" size="small"></v-icon>
          <v-icon icon="mdi-wallet" size="small"></v-icon>
          <v-icon icon="mdi-bank" size="small"></v-icon>
        </p>
        <p class="text-caption">
          &copy; {{ currentYear }} Mi Tienda Virtual. Todos los derechos reservados. | Política de Privacidad | Términos
          de Servicio
        </p>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Ciclo de vida: Datos reactivos
const currentYear = ref<number>(new Date().getFullYear())

// Ciclo de vida: Montado
onMounted(() => {
  console.log('🏪 Footer montado - Año:', currentYear.value)
})

// Ciclo de vida: Antes de desmontar
onBeforeUnmount(() => {
  console.log('🏪 Footer será desmontado')
})
</script>

<style scoped lang="scss">
.footer {
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.12);

  .list-unstyled {
    list-style: none;
    padding: 0;
  }

  .social-links {
    display: flex;
    gap: 8px;
  }

  h3,
  h4 {
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
  }
}
</style>
