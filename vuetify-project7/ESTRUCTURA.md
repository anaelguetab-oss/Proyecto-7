# Estructura del Proyecto E-Commerce

## 📁 Arquitectura Completa

```
src/
├── App.vue                      # Componente raíz
├── main.ts
├── api/
│   └── productApi.ts            # Servicio HTTP para productos
├── components/
│   ├── layout/
│   │   ├── Header.vue           # Encabezado con carrito
│   │   └── Footer.vue           # Pie de página
│   ├── products/
│   │   ├── ProductCard.vue      # Tarjeta individual
│   │   ├── ProductList.vue      # Grid de productos
│   │   └── ProductFilter.vue    # Panel de filtros
│   └── cart/
│       ├── CartDrawer.vue       # Panel lateral carrito
│       └── CartButton.vue       # Botón carrito
├── composables/
│   ├── useProducts.ts           # Lógica de productos
│   └── useCart.ts               # Lógica de carrito
├── stores/
│   ├── productStore.ts          # Pinia store productos
│   └── cartStore.ts             # Pinia store carrito
├── types/
│   └── product.ts               # Definiciones TypeScript
├── utils/
│   └── translations.ts          # Traducciones de categorías
└── plugins/
    └── index.ts                 # Integración Pinia + Vuetify
```

## 🔄 Ciclos de Vida Vue 3 Implementados

### App.vue
```typescript
onMounted()        // Cargar datos al iniciar
onBeforeUnmount()  // Limpiar recursos
```

### Header.vue
```typescript
onMounted()        // Confirmar header listo
onUnmounted()      // Limpiar listeners
```

### Footer.vue
```typescript
onMounted()        // Inicializar datos
onBeforeUnmount()  // Guardar estado
```

### ProductList.vue
```typescript
onMounted()        // Log cuando lista está lista
onBeforeUpdate()   // Log antes de re-render por filtros
```

### ProductCard.vue
```typescript
onMounted()        // Log producto cargado
watch()            // Observar cambios en carrito
```

## 📦 Componentes Base

### 1. **App.vue** (Componente Raíz)
- Estructura principal de la aplicación
- Integra Header, Footer y contenido
- Gestiona ciclo de vida general

### 2. **Header.vue** (Encabezado)
- Logo y título de la tienda
- Badge con cantidad de productos en carrito
- Botón de tema (claro/oscuro)
- Botón dinámico del carrito

### 3. **Footer.vue** (Pie de página)
- Información de la tienda
- Enlaces rápidos
- Redes sociales
- Copyright y año dinámico

### 4. **ProductCard.vue** (Tarjeta de Producto)
- Imagen del producto
- Nombre y descripción (truncada)
- Categoría (traducida)
- Precio en CLP$
- Rating (si existe)
- Botón agregar al carrito

### 5. **ProductList.vue** (Grid de Productos)
- Grid responsivo (1-4 columnas)
- Estados: carga, error, sin resultados
- Cantidad mostrada vs total
- Skeleton loader

### 6. **ProductFilter.vue** (Filtros)
- Búsqueda por texto
- Filtro por categoría
- Slider de rango de precios
- Botón limpiar filtros

## 🎯 Flujo de Datos

```
Evento usuario
    ↓
Componente (ProductCard, ProductFilter)
    ↓
Composable (useProducts, useCart)
    ↓
Store Pinia (productStore, cartStore)
    ↓
Computed reactivo actualiza UI
    ↓
Componentes re-renderizan
```

## 🚀 Ciclos de Vida en Orden

1. **created** - Inicializar data (No usado, usamos ref en setup)
2. **beforeMount** - Antes de renderizar (No necesario)
3. **mounted** - Después de renderizar ✅
   - Cargar datos desde API
   - Inicializar listeners
4. **beforeUpdate** - Antes de actualización ✅
   - Log de cambios
5. **updated** - Después de actualización
6. **beforeUnmount** - Antes de destruir ✅
   - Guardar estado
   - Limpiar recursos
7. **unmounted** - Después de destruir ✅
   - Verificación final

## 💱 Características

### Traductor de Categorías
```typescript
electronics → Electrónica
jewelery → Joyería
men's clothing → Ropa para Hombres
women's clothing → Ropa para Mujeres
```

### Conversión de Moneda
- 1 USD = 850 CLP
- Formato: `CLP$ 42.500` (sin decimales, con separadores)

### Filtrado Inteligente
- Busca en título y descripción
- Filtra por categoría (con traducción)
- Rango de precios dinámico

### Estado Reactivo
- Productos cargando
- Errores manejados
- Carrito actualiza en tiempo real

## 📱 Responsividad

- **Mobile** (<600px): 1 columna, filtros expandibles
- **Tablet** (600-960px): 2 columnas
- **Desktop** (>960px): 3-4 columnas, filtros en sidebar

## 🎨 Estilos

- Vuetify para componentes UI
- SCSS en componentes con `scoped`
- Animaciones en carrito (pulse, scale)
- Tema claro/oscuro integrado

## 🧪 Consola de Desarrollo

Al ejecutar `npm run dev`, verás logs de ciclo de vida:
```
🚀 App montado - Cargando datos...
✓ Datos cargados exitosamente
📦 Header montado - Tienda lista
📋 ProductList montado - Productos cargados: 20
🛍️ ProductCard montado - Product Name...
🔄 ProductList actualizando - Productos filtrados: 5
✅ Producto agregado al carrito: Product Name...
```

## 🔧 Próximas Mejoras

- [ ] Persistencia en localStorage
- [ ] Página de detalle de producto
- [ ] Favoritos/wishlist
- [ ] Checkout con formulario
- [ ] Integración de pago
- [ ] Tests unitarios (Vitest)
- [ ] PWA (Progressive Web App)
