# Changelog

Todos los cambios notables de este proyecto se documentan en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/) y este proyecto se adhiere a [Semantic Versioning](https://semver.org/).

## [1.0.0] - 2026-04-17

### ✨ Agregado

#### Features Principales
- ✅ Catálogo de productos con FakeStore API
- ✅ Carrito de compras funcional
- ✅ Gestión de estado con Pinia
- ✅ Filtrado avanzado (búsqueda, categoría, precio)
- ✅ Conversión de moneda a CLP
- ✅ Traducciones al español

#### Componentes
- ProductCard - Tarjeta individual de producto
- ProductList - Grid responsivo de productos
- ProductFilter - Filtros avanzados
- CartDrawer - Panel lateral del carrito
- Header - Encabezado con navegación
- Footer - Pie de página con links
- CartButton - Botón carrito con badge

#### Frameworks UI
- Vuetify 3 como UI framework principal
- Quasar Framework como alternativa
- Componentes ejemplo en ambos frameworks

#### Estado Management
- productStore - Gestión de productos y filtros
- cartStore - Gestión del carrito
- useProducts - Composable para productos
- useCart - Composable para carrito

#### Tooling & DevTools
- Vue 3 con Composition API
- Vite como build tool
- TypeScript para type safety
- SCSS para estilos modular
- ESLint para code quality

#### Documentación
- README_PROYECTO.md - Documentación completa
- ESTRUCTURA.md - Arquitectura del proyecto
- QUASAR_GUIDE.md - Guía de Quasar Framework
- VUE_CLI_VS_VITE.md - Comparación de build tools
- CONTRIBUTING.md - Guía de contribución
- CHANGELOG.md - Este archivo

### 🔧 Configuración

#### Pinia Stores
```
productStore:
  - fetchProducts()
  - filterByCategory(category)
  - setPriceRange(min, max)
  - setSearchQuery(query)
  - clearFilters()
  - filteredProducts (computed)
  - stats (computed)

cartStore:
  - addToCart(product, quantity)
  - removeFromCart(productId)
  - updateQuantity(productId, quantity)
  - clearCart()
  - itemCount (computed)
  - totalPrice (computed)
  - tax (computed)
  - finalPrice (computed)
  - isInCart(productId)
```

#### Ciclos de Vida
- App.vue: onMounted (cargar datos), onBeforeUnmount
- Header.vue: onMounted, onUnmounted
- ProductList.vue: onMounted, onBeforeUpdate
- ProductCard.vue: onMounted, watch
- Footer.vue: onMounted, onBeforeUnmount

#### API Integration
- productApi.ts servicio HTTP
- Endpoints: getAllProducts, getCategories, getProductsByCategory
- Error handling con try-catch

### 📦 Dependencias

```json
{
  "dependencies": {
    "vue": "^3.x",
    "pinia": "^2.x",
    "vuetify": "^3.x",
    "quasar": "^2.x",
    "axios": "^1.x",
    "@quasar/extras": "^latest"
  },
  "devDependencies": {
    "vite": "^8.x",
    "typescript": "^5.x",
    "@vitejs/plugin-vue": "^4.x",
    "unplugin-fonts": "^latest",
    "vite-plugin-vuetify": "^1.x"
  }
}
```

### 🎨 Diseño & UX

- Grid responsivo (1-4 columnas según viewport)
- Breakpoints: xs (0), sm (600px), md (1024px), lg (1440px), xl (1920px)
- Colores brand: Primary #1976D2, Secondary #26A69A
- Soporte para dark mode (Quasar)
- Iconos Material Design

### 🌍 Internacionalización

Categorías traducidas:
- electronics → Electrónica
- jewelery → Joyería  
- men's clothing → Ropa para Hombres
- women's clothing → Ropa para Mujeres

Formato de moneda:
- Locale: es-CL
- Símbolo: CLP$
- Tasa: 1 USD = 850 CLP

### ✅ Testing & Quality

- TypeScript strict mode
- ESLint configuration
- No console errors
- Build successful (vite)
- Type checking pass

### 📚 Documentación

- Documentación completa en README_PROYECTO.md
- Guías de uso para frameworks
- Explicación de arquitectura
- Ejemplos de código
- Troubleshooting

---

## Historial de Versiones

### v1.0.0 - Release Inicial
- Proyecto completamente funcional
- Todos los features principales implementados
- Documentación completa
- Ready for production

---

## Próximas Versiones

### v1.1.0 (Próximo)
- [ ] LocalStorage persistence
- [ ] Página de detalle de producto
- [ ] Wishlist/Favoritos
- [ ] Paginación

### v1.2.0
- [ ] Checkout form
- [ ] Sistema de autenticación
- [ ] Historial de compras
- [ ] Reviews de usuarios

### v2.0.0 (Futuro)
- [ ] Backend con Node.js
- [ ] Base de datos real
- [ ] Payment gateway integration
- [ ] Admin dashboard
- [ ] PWA features

---

## Cómo Actualizar

```bash
# Obtener últimas actualizaciones
git pull origin master

# Instalar nuevas dependencias
npm install

# Verificar que todo funciona
npm run build
```

## Reporte de Bugs

Si encuentras un bug, por favor reporta en:
[GitHub Issues](https://github.com/anaelguetab-oss/Proyecto-7/issues)

## Licencia

MIT License - Ver LICENSE para detalles

---

**Última actualización:** 17 de abril de 2026
