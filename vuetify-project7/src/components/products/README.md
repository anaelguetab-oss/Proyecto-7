# Catálogo de Productos - Documentación

## 📁 Estructura del Proyecto

```
src/
├── api/
│   └── productApi.ts          # Servicio de API REST
├── components/
│   └── products/
│       ├── ProductCard.vue    # Componente individual de producto
│       ├── ProductList.vue    # Grid de productos con paginación
│       └── ProductFilter.vue  # Panel de filtros
├── composables/
│   └── useProducts.ts          # Composable reutilizable
├── stores/
│   └── productStore.ts         # Store Pinia (estado global)
├── types/
│   └── product.ts              # Definiciones de TypeScript
└── plugins/
    └── index.ts                # Integración de Pinia
```

## 🏗️ Arquitectura

### 1. **API Service** (`src/api/productApi.ts`)
- Capa de comunicación con la API REST
- Utiliza axios para peticiones HTTP
- Métodos:
  - `getAllProducts()` - Obtiene todos los productos
  - `getProductById(id)` - Obtiene un producto específico
  - `getProductsByCategory(category)` - Filtra por categoría
  - `getCategories()` - Obtiene categorías disponibles

**API Utilizada:** [FakeStore API](https://fakestoreapi.com)

### 2. **Store Pinia** (`src/stores/productStore.ts`)
- Gestión centralizada del estado global
- Estado reactivo: productos, categorías, filtros
- Acciones: fetch, filtrado, búsqueda
- Computed: productos filtrados, estadísticas

```typescript
// Uso en componentes
const store = useProductStore()
await store.fetchProducts()
const filtered = store.filteredProducts
```

### 3. **Composable** (`src/composables/useProducts.ts`)
- Abstracción de la lógica de la tienda
- Interfaz simplificada para componentes
- Reutilizable en múltiples componentes

```typescript
// Uso en componentes
const { products, filteredProducts, search, filterByCategory } = useProducts()
```

### 4. **Componentes Vue**

#### `ProductCard.vue`
- Tarjeta individual de producto
- Muestra: imagen, nombre, precio, categoría, rating
- Hover effect y transiciones

#### `ProductList.vue`
- Grid responsivo (1-4 columnas según pantalla)
- Estado de carga y errores
- Mensaje cuando no hay resultados
- Integración con ProductCard

#### `ProductFilter.vue`
- Búsqueda por nombre/descripción
- Filtro por categoría
- Rango de precios (slider)
- Botón para limpiar filtros

## 🎯 Características

✅ **Modular** - Componentes independientes y reutilizables
✅ **Escalable** - Fácil agregar nuevas funciones
✅ **Responsivo** - Adapta a móvil, tablet y desktop
✅ **Accesible** - Usa componentes Vuetify a11y
✅ **Tipo-seguro** - TypeScript completo
✅ **Gestión de estado** - Pinia centralizada
✅ **Filtros avanzados** - Búsqueda, categoría, precio
✅ **Manejo de errores** - Try-catch en API y alertas

## 🚀 Cómo Usar

### 1. Iniciar el proyecto
```bash
npm run dev
```

### 2. Agregar nuevas funciones

#### Ejemplo: Agregar favoritos
```typescript
// En productStore.ts
const favorites = ref<number[]>([])

const toggleFavorite = (productId: number) => {
  const index = favorites.value.indexOf(productId)
  if (index > -1) {
    favorites.value.splice(index, 1)
  } else {
    favorites.value.push(productId)
  }
}

const isFavorite = computed(() => 
  (id: number) => favorites.value.includes(id)
)
```

#### Ejemplo: Agregar carrito de compras
```typescript
// Crear nuevo store
// src/stores/cartStore.ts
export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])
  
  const addToCart = (product: Product, quantity: number = 1) => {
    // lógica
  }
  
  return { items, addToCart }
})
```

## 📊 Flujo de Datos

```
App.vue (onMounted)
  ↓
loadProducts() → fetchProducts() → productAPI.getAllProducts()
  ↓
Store actualiza: products[], loading, error
  ↓
Computed: filteredProducts (basado en filtros)
  ↓
ProductList.vue → ProductCard.vue (renderiza)
```

## 🔧 Configuración

### Cambiar API
En `src/api/productApi.ts`, cambiar `baseURL`:
```typescript
baseURL: 'https://tu-api.com/products'
```

### Agregar más filtros
En `src/stores/productStore.ts`, agregar a `filters`:
```typescript
const newFilter = ref<string>('')

const filteredProducts = computed(() => {
  return products.value.filter(p => {
    // Nuevas condiciones
  })
})
```

## 📱 Responsividad

- **Mobile** (<600px): 1 columna, filtros en expansion panel
- **Tablet** (600-960px): 2 columnas
- **Desktop** (>960px): 3-4 columnas, filtros en sidebar

## 🎨 Personalización

### Temas
Los temas se controlan con Vuetify en `src/plugins/vuetify.ts`

### Estilos
- Componentes usan SCSS
- Variables globales en `src/styles/settings.scss`
- Sigue nomenclatura BEM

## 🧪 Testing (Próxima fase)

Vitest está configurado. Crear tests en:
```
src/components/products/__tests__/
src/stores/__tests__/
src/composables/__tests__/
```

## 📝 Notas

- API usa FakeStore (datos de ejemplo)
- Para producción, reemplazar con API real
- Agregar autenticación y autorización según sea necesario
- Implementar paginación/lazy-loading para muchos productos
