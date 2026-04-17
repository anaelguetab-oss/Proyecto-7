# 🛒 Tienda E-commerce con Vue 3, Vite, Vuetify y Quasar

Aplicación e-commerce completa y profesional construida con Vue 3, Vite, Vuetify 3 y Quasar Framework. Proyecto modular, escalable y listo para producción.

**🔗 Repositorio:** [anaelguetab-oss/Proyecto-7](https://github.com/anaelguetab-oss/Proyecto-7)

## ✨ Características

- ✅ **Catálogo de Productos** - Integración con FakeStore API
- ✅ **Carrito de Compras** - Gestión completa con cantidades
- ✅ **Filtrado Avanzado** - Por categoría, precio y búsqueda
- ✅ **Conversión de Moneda** - Precios en CLP (peso chileno)
- ✅ **Traducciones** - Interfaz completamente en español
- ✅ **Componentes Reutilizables** - ProductCard, ProductFilter, CartDrawer
- ✅ **Estado Global** - Pinia para productos y carrito
- ✅ **Responsive** - Funciona en mobile, tablet y desktop
- ✅ **Modo Oscuro** - Soporte completo con Quasar Dark
- ✅ **TypeScript** - Type-safe en toda la aplicación
- ✅ **Ciclos de Vida** - Implementados en componentes principales
- ✅ **Dos UI Frameworks** - Vuetify + Quasar (progresivamente migrable)

## 🎯 Stack Tecnológico

| Tecnología | Versión | Propósito |
|-----------|---------|----------|
| **Vue 3** | 3.x | Framework principal |
| **Vite** | 8.x | Build tool moderno |
| **TypeScript** | 5.x | Tipado estático |
| **Vuetify** | 3.x | Componentes UI primarios |
| **Quasar** | Latest | Framework UI secundario |
| **Pinia** | Latest | Gestión de estado |
| **Axios** | Latest | Cliente HTTP |
| **SCSS** | Latest | Preprocesador CSS |

## 📁 Estructura del Proyecto

```
src/
├── App.vue                          # Componente raíz
├── main.ts                          # Punto de entrada
├── api/
│   └── productApi.ts               # Servicio REST
├── components/
│   ├── layout/
│   │   ├── Header.vue              # Encabezado Vuetify
│   │   ├── HeaderQuasar.vue        # Encabezado Quasar
│   │   └── Footer.vue              # Pie de página
│   ├── products/
│   │   ├── ProductCard.vue         # Tarjeta producto (Vuetify)
│   │   ├── ProductCardQuasar.vue   # Tarjeta producto (Quasar)
│   │   ├── ProductList.vue         # Grid de productos
│   │   └── ProductFilter.vue       # Filtros avanzados
│   └── cart/
│       ├── CartDrawer.vue          # Carrito lateral
│       └── CartButton.vue          # Botón carrito
├── stores/
│   ├── productStore.ts             # Pinia - Gestión productos
│   └── cartStore.ts                # Pinia - Gestión carrito
├── composables/
│   ├── useProducts.ts              # Lógica productos
│   └── useCart.ts                  # Lógica carrito
├── plugins/
│   ├── vuetify.ts                  # Configuración Vuetify
│   └── quasar.ts                   # Configuración Quasar
├── types/
│   └── product.ts                  # Interfaces TypeScript
├── utils/
│   └── translations.ts             # Traducciones español
└── styles/
    ├── settings.scss               # Variables Vuetify
    └── quasar.variables.scss       # Variables Quasar
```

## 🚀 Inicio Rápido

### Requisitos
- Node.js 16+ 
- npm o yarn
- Git

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/anaelguetab-oss/Proyecto-7.git
cd Proyecto-7/vuetify-project7

# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build producción
npm run build

# Preview producción
npm run preview
```

**URL local:** http://localhost:5173

## 📦 Funcionalidades Principales

### 1. Catálogo de Productos
- Fetching de datos desde FakeStore API
- Paginación y filtrado en tiempo real
- Búsqueda por título y descripción
- Calificaciones y reseñas

### 2. Gestión de Carrito
- Añadir/eliminar productos
- Actualizar cantidades
- Cálculo automático de subtotal
- Impuesto 10% aplicado automáticamente
- Totales en tiempo real

### 3. Filtrado Avanzado
```
✓ Búsqueda por texto
✓ Filtro por categoría
✓ Rango de precio dinámico
✓ Botón limpiar filtros
```

### 4. Internacionalización
- Categorías traducidas al español:
  - electronics → Electrónica
  - jewelery → Joyería
  - men's clothing → Ropa para Hombres
  - women's clothing → Ropa para Mujeres

### 5. Conversión de Moneda
- Precio base en USD
- Conversión a CLP (Chilean Peso)
- Tasa: 1 USD = 850 CLP
- Formato locale es-CL

## 🎨 Componentes Disponibles

### Vuetify (Componentes Primarios)
```vue
<!-- ProductCard.vue -->
<v-card> + <v-btn> + <v-img>

<!-- ProductList.vue -->
<v-container> + <v-row> + <v-col>

<!-- CartDrawer.vue -->
<v-navigation-drawer> + <v-list>
```

### Quasar (Componentes Ejemplo)
```vue
<!-- HeaderQuasar.vue -->
<q-header> + <q-toolbar> + <q-badge>

<!-- ProductCardQuasar.vue -->
<q-card> + <q-rating> + <q-popup-proxy>
```

## 📊 Gestión de Estado (Pinia)

### Product Store
```typescript
// state
products: Product[]
categories: string[]
selectedCategory: string
priceRange: [number, number]
searchQuery: string

// actions
fetchProducts()
filterByCategory(category)
setPriceRange(min, max)
setSearchQuery(query)

// computed
filteredProducts
stats { totalProducts, filteredCount, avgPrice }
```

### Cart Store
```typescript
// state
items: CartItem[]

// actions
addToCart(product, quantity)
removeFromCart(productId)
updateQuantity(productId, quantity)
clearCart()

// computed
itemCount
totalPrice
tax (10%)
finalPrice
isInCart(productId)
```

## 🔗 API Integration

**Endpoint:** https://fakestoreapi.com

```typescript
// Métodos disponibles
getAllProducts()           // Todos los productos
getProductsByCategory()    // Por categoría
getCategories()           // Lista categorías
getProductById(id)        // Producto específico
```

## 💾 Ciclos de Vida Implementados

| Componente | onMounted | onBeforeUnmount | watch |
|-----------|-----------|-----------------|-------|
| App.vue | ✅ Cargar datos | ✅ Limpiar | |
| Header.vue | ✅ Init | ✅ Cleanup | |
| ProductList.vue | ✅ Log carga | ✅ | onBeforeUpdate |
| ProductCard.vue | ✅ Log producto | | ✅ Carrito |
| Footer.vue | ✅ Init | ✅ Cleanup | |

## 🎯 Flujo de Datos

```
App.vue (root)
├── Header.vue
│   └── Emite: @open-cart
├── CartDrawer.vue
│   ├── Lee: cartStore.items
│   └── Acciones: add, remove, update
├── ProductList.vue
│   └── Usa: useProducts()
│       ├── Fetch: productStore
│       └── Filter: search, category, price
└── Footer.vue
```

## 🔐 TypeScript Types

```typescript
// Product
export interface Product {
  id: number
  title: string
  price: number
  description: string
  image: string
  category: string
  rating?: { rate: number; count: number }
}

// CartItem
export interface CartItem {
  product: Product
  quantity: number
}
```

## 📱 Responsive Design

```scss
// Breakpoints Vuetify
xs: 0
sm: 600px
md: 1024px
lg: 1440px
xl: 1920px

// ProductList Grid
1 col   - mobile
2 cols  - tablet
3-4 cols - desktop
```

## 🌙 Modo Oscuro

Disponible con Quasar:
```typescript
const $q = useQuasar()
$q.dark.toggle()
```

## 🚢 Build & Deploy

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
# Output: dist/
```

### Type Checking
```bash
npm run type-check
```

## 📚 Documentación Adicional

- [ESTRUCTURA.md](./ESTRUCTURA.md) - Guía completa de arquitectura
- [QUASAR_GUIDE.md](./QUASAR_GUIDE.md) - Guía de Quasar Framework
- [VUE_CLI_VS_VITE.md](./VUE_CLI_VS_VITE.md) - Comparación build tools

## 🎓 Conceptos Implementados

- ✅ Composition API
- ✅ Reactive State con Pinia
- ✅ Custom Composables
- ✅ Computed Properties
- ✅ Watchers
- ✅ Component Lifecycle
- ✅ Event Emission
- ✅ Props & Slots
- ✅ TypeScript Generics
- ✅ Dynamic Imports
- ✅ Error Handling
- ✅ Loading States

## 🔄 Mejoras Futuras

### Corto Plazo
- [ ] LocalStorage persistence
- [ ] Página detalle producto
- [ ] Wishlist/Favoritos
- [ ] Paginación

### Mediano Plazo
- [ ] Checkout form
- [ ] Sistema de autenticación
- [ ] Carrito persistente
- [ ] Historial de compras

### Largo Plazo
- [ ] Payment integration (Stripe/PayPal)
- [ ] Admin dashboard
- [ ] Notificaciones por email
- [ ] PWA features
- [ ] Server-side rendering

## 🐛 Troubleshooting

### Puerto 5173 en uso
```bash
npm run dev -- --port 3000
```

### Limpiar cache
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build muy grande
```bash
# Usar code-splitting en vite.config.mts
build: { chunkSizeWarningLimit: 1000 }
```

## 📄 Licencia

MIT License - Proyecto de demostración educativo

## 👤 Autor

**Anael Gueta**
- GitHub: [@anaelguetab-oss](https://github.com/anaelguetab-oss)
- Repositorio: [Proyecto-7](https://github.com/anaelguetab-oss/Proyecto-7)

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 💬 Soporte

Para preguntas o problemas, abre un [issue en GitHub](https://github.com/anaelguetab-oss/Proyecto-7/issues)

## 🎉 Agradecimientos

- [Vuetify](https://vuetifyjs.com/) - UI Component Framework
- [Quasar](https://quasar.dev/) - Multi-platform Framework
- [FakeStore API](https://fakestoreapi.com/) - REST API de prueba
- [Pinia](https://pinia.vuejs.org/) - State Management

---

**Hecho con ❤️ usando Vue 3 + Vite**
