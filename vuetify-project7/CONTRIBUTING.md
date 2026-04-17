# Guía de Contribución

Gracias por tu interés en contribuir a Proyecto-7. Este documento proporciona orientación sobre cómo contribuir al proyecto.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [Cómo Contribuir](#cómo-contribuir)
- [Reportar Bugs](#reportar-bugs)
- [Sugerir Mejoras](#sugerir-mejoras)
- [Proceso de Pull Request](#proceso-de-pull-request)
- [Convenciones de Código](#convenciones-de-código)
- [Commits](#commits)

## 📜 Código de Conducta

Este proyecto se adhiere a un Código de Conducta que todos los contribuyentes deben seguir:

- Sé respetuoso con otros contribuyentes
- Sé constructivo en tus críticas
- Mantén la profesionalidad en todas las interacciones
- Reporta comportamientos inapropiados

## 🤝 Cómo Contribuir

### Preparación

1. **Fork el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/Proyecto-7.git
   cd Proyecto-7
   ```

2. **Instala dependencias**
   ```bash
   npm install
   ```

3. **Crea una rama para tu feature**
   ```bash
   git checkout -b feature/tu-feature-name
   ```

## 🐛 Reportar Bugs

### Antes de reportar un bug

- Verifica que el bug no haya sido reportado
- Confirma que es reproducible en la última versión
- Proporciona ejemplos específicos para reproducir

### Enviar un reporte de bug

Usa la plantilla de GitHub Issues con:

- **Título descriptivo**
- **Descripción clara del bug**
- **Pasos para reproducir**
  ```
  1. Ir a '...'
  2. Click en '...'
  3. Ver error
  ```
- **Comportamiento esperado**
- **Comportamiento actual**
- **Screenshots** (si aplica)
- **Ambiente**
  - Node version
  - npm/yarn version
  - OS
  - Browser (si es front-end)

Ejemplo:
```markdown
**Bug:** ProductCard no se actualiza cuando cambia el precio

**Pasos:**
1. Cargar la tienda
2. Cambiar el precio con el slider
3. ProductCard muestra precio viejo

**Esperado:** El precio debe actualizarse en tiempo real
**Actual:** El precio no se actualiza hasta recargar

**Versión:** Node 18.0.0, npm 9.0.0
```

## 💡 Sugerir Mejoras

### Plantilla de sugerencia

```markdown
**Resumen:** Una descripción clara de la mejora

**Motivación:** Por qué sería útil

**Ejemplos de uso:**
```typescript
// Cómo se usaría la nueva feature
```

**Implementación potencial:**
- Opción 1: ...
- Opción 2: ...

**Impacto:** Cómo afecta a los usuarios
```

## 📝 Proceso de Pull Request

### 1. **Prepara tu trabajo**
```bash
# Actualiza master
git checkout master
git pull origin master

# Crea rama feature
git checkout -b feature/amazing-feature

# Haz commits regulares
git commit -m "feat: agregar feature X"
git push origin feature/amazing-feature
```

### 2. **Crea un Pull Request**

Usa esta plantilla:

```markdown
## 📝 Descripción
Descripción clara de los cambios

## 🔗 Issue Relacionado
Closes #(issue number)

## ✅ Checklist
- [ ] Mi código sigue el estilo del proyecto
- [ ] He actualizado la documentación
- [ ] He agregado tests si es necesario
- [ ] Los tests pasan localmente

## 🎬 Screenshots
(Si aplica)

## 📚 Documentación
- Cambios en documentación: (enlace)
- Guía de uso: (descripción)
```

### 3. **Revisión de código**

Los PR serán revisados para:
- Calidad del código
- Cumplimiento de convenciones
- Tests
- Documentación
- Impacto en performance

### 4. **Fusión**

Una vez aprobado:
```bash
# El mantener fusionará el PR
# Tu rama se borrará automáticamente
```

## 🎨 Convenciones de Código

### TypeScript
- Usa tipos explícitos
- Evita `any` a menos que sea necesario
- Usa interfaces para objetos complejos

```typescript
// ✅ Bien
interface Product {
  id: number
  title: string
  price: number
}

function addProduct(product: Product): void {
  // ...
}

// ❌ Mal
function addProduct(product: any): any {
  // ...
}
```

### Vue Components
- Usa `<script setup>` con Composition API
- Nombres de componentes en PascalCase
- Props explícitos con tipos

```vue
<!-- ✅ Bien -->
<script setup lang="ts">
import { ref } from 'vue'
import type { Product } from '@/types/product'

interface Props {
  product: Product
}

const props = defineProps<Props>()
const quantity = ref(1)
</script>

<!-- ❌ Mal -->
<script>
export default {
  props: ['product'],
  data() { return { quantity: 1 } }
}
</script>
```

### Nombres
- Componentes: `ProductCard.vue`
- Stores: `productStore.ts`
- Composables: `useProducts.ts`
- Funciones: `camelCase`
- Constantes: `UPPER_SNAKE_CASE`

### Estilos
- SCSS modular en componentes
- Variables en variables.scss
- BEM para clases CSS

```vue
<style scoped lang="scss">
.product-card {
  &__image {
    width: 100%;
  }
  
  &__title {
    font-weight: bold;
  }
  
  &--featured {
    border: 2px solid var(--primary);
  }
}
</style>
```

## 💬 Commits

### Formato de Commit

Usa [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Tipos
- `feat`: Nueva feature
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Cambios de formato (no afectan funcionalidad)
- `refactor`: Refactoring sin cambiar funcionalidad
- `perf`: Mejoras de performance
- `test`: Agregar tests
- `chore`: Cambios en configuración/dependencias

### Ejemplos

```bash
# Feature
git commit -m "feat(cart): agregar función de descuento"

# Bug fix
git commit -m "fix(productCard): corregir cálculo de precio"

# Documentation
git commit -m "docs: actualizar guía de instalación"

# Multiple lines
git commit -m "feat(store): agregar carrito persistente

- Usar localStorage para guardar items
- Recuperar carrito al cargar la app
- Sincronizar con servidor"
```

## 📚 Desarrollo

### Ambiente Local

```bash
# Instalar
npm install

# Desarrollo
npm run dev

# Type check
npm run type-check

# Build
npm run build

# Preview
npm run preview
```

### Testing

```bash
# Tests unitarios (cuando estén disponibles)
npm run test

# Coverage
npm run test:coverage
```

## 📖 Documentación

- Documenta nuevas features en `README_PROYECTO.md`
- Actualiza `ESTRUCTURA.md` si cambias la arquitectura
- Agrega JSDoc a funciones públicas

```typescript
/**
 * Agrega un producto al carrito
 * @param product - El producto a agregar
 * @param quantity - La cantidad (por defecto 1)
 * @returns void
 */
export function addToCart(product: Product, quantity = 1): void {
  // ...
}
```

## ❓ Preguntas?

- 📖 Lee la documentación en `README_PROYECTO.md`
- 💬 Abre una [Discussión](https://github.com/anaelguetab-oss/Proyecto-7/discussions)
- 🐛 Reporta un [Issue](https://github.com/anaelguetab-oss/Proyecto-7/issues)

## 🙏 Gracias

¡Gracias por contribuir a hacer este proyecto mejor!

---

**Código de Conducta:** Este proyecto se adhiere al [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/)
