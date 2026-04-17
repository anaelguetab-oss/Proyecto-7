# Vue CLI vs Vite - Comparación

## 🎯 Nuestro Proyecto: Vite (Más Moderno)

Nuestro proyecto está configurado con **Vite** en lugar de Vue CLI, que es:
- ✅ Más rápido (ESM nativo)
- ✅ Mejor HMR (Hot Module Replacement)
- ✅ Compilación más eficiente
- ✅ Recomendado para Vue 3

### Configuración Vite (Actual)
```bash
npm create vite@latest -- --template vue
cd proyecto
npm install
npm run dev
```

### Alternativa con Vue CLI (Tradicional)
```bash
npm install -g @vue/cli
vue create mi-tienda
cd mi-tienda
npm run serve
```

## 📊 Comparación

| Aspecto | Vite | Vue CLI |
|---------|------|---------|
| **Velocidad Dev** | ⚡ Muy rápida | Más lenta |
| **HMR** | Instantáneo | Lento |
| **Build** | 500ms - 2s | 10-20s |
| **Comunidad** | Creciendo | Establecida |
| **Docs** | Excelentes | Excelentes |

## 🏗️ Estructura con Vue CLI

Si usáramos Vue CLI, la estructura sería:
```
proyecto/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── views/
│   ├── assets/
│   ├── App.vue
│   └── main.ts
├── tests/
│   ├── unit/
│   └── e2e/
├── vue.config.js
├── babel.config.js
└── package.json
```

## 🔧 Diferencias Clave

### Punto de entrada
**Vite:**
```typescript
// src/main.ts (directo en src/)
import App from './App.vue'
createApp(App).use(router).use(pinia).mount('#app')
```

**Vue CLI:**
```typescript
// src/main.ts (igual estructura)
import App from './App.vue'
new Vue({ router, store, render: h => h(App) }).$mount('#app')
```

### Configuración
**Vite:** `vite.config.ts`
```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: { alias: { '@': '/src' } }
})
```

**Vue CLI:** `vue.config.js`
```javascript
module.exports = {
  configureWebpack: { /* ... */ },
  chainWebpack: config => { /* ... */ }
}
```

## ✅ Nuestro Proyecto Ya Tiene Todo

- ✅ **ProductCard** - Componente para mostrar producto
- ✅ **Ciclos de vida** - mounted, updated, unmounted
- ✅ **Estructura base**:
  - ✅ App.vue (raíz)
  - ✅ Header (encabezado)
  - ✅ Footer (pie)
  - ✅ ProductList (listado)
  - ✅ ProductFilter (filtros)
  - ✅ CartDrawer (carrito)

## 🚀 Para Migrarse a Vue CLI

Si necesitaras Vue CLI, el proceso sería:

1. Crear nuevo proyecto:
```bash
vue create tienda-vue-cli
cd tienda-vue-cli
```

2. Copiar archivos src/ (mismo código funciona)

3. Instalar dependencias:
```bash
npm install vue-router pinia vuetify axios
```

4. Configurar en `vue.config.js`

5. Ejecutar:
```bash
npm run serve    # Desarrollo
npm run build    # Producción
```

## 💡 Recomendación

**Mantener Vite** porque:
1. Es el estándar moderno para Vue 3
2. Ya está completamente configurado
3. El código es idéntico a Vue CLI
4. Mejor rendimiento de desarrollo
5. Menor curva de aprendizaje

## 🎓 Ciclos de Vida en Ambos

El código de ciclos de vida es **idéntico**:

```typescript
// Funciona en Vite y Vue CLI
import { onMounted, onBeforeUnmount, watch } from 'vue'

export default {
  setup() {
    onMounted(() => {
      console.log('Componente montado')
    })
    
    onBeforeUnmount(() => {
      console.log('Desmontando...')
    })
    
    watch(variable, (newVal) => {
      console.log('Variable cambió:', newVal)
    })
  }
}
```

## 📚 Referencias

- [Vite Docs](https://vitejs.dev/)
- [Vue CLI Docs](https://cli.vuejs.org/)
- [Vue 3 Guide](https://vuejs.org/guide/)
- [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)
