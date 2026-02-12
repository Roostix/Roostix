# Roostix Portfolio

Portfolio web de Roostix Software & Solutions desarrollado con React, TypeScript y Vite. Incluye sistema de traducción multiidioma (ES/EN), diseño responsive y componentes modernos.

## 📋 Especificaciones del Proyecto

### Versiones Requeridas

- **Node.js**: `v18.0.0` o superior (recomendado: `v20.x` o superior)
- **npm**: `v9.0.0` o superior (recomendado: `v10.x` o superior)

### Stack Tecnológico

#### Core
- **React**: `^19.2.0`
- **TypeScript**: `~5.9.3`
- **Vite**: `^7.2.4`

#### Estilos
- **Tailwind CSS**: `^4.1.18`
- **@tailwindcss/vite**: `^4.1.18`
- **tw-animate-css**: `^1.4.0`

#### UI Components
- **shadcn/ui**: Sistema de componentes basado en Radix UI
- **Radix UI**: `^1.4.3` (base de shadcn/ui)
- **Lucide React**: `^0.563.0` (iconos)
- **class-variance-authority**: `^0.7.1` (variantes de componentes)
- **clsx**: `^2.1.1` (utilidad para clases CSS)
- **tailwind-merge**: `^3.4.0` (merge de clases Tailwind)

#### Desarrollo
- **ESLint**: `^9.39.1`
- **TypeScript ESLint**: `^8.46.4`
- **@vitejs/plugin-react**: `^5.1.1`

## 🚀 Instalación y Ejecución

### Prerrequisitos

Asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (v18 o superior)
- [npm](https://www.npmjs.com/) (v9 o superior)

### Pasos para Ejecutar

1. **Clonar el repositorio** (si aplica)
   ```bash
   git clone <repository-url>
   cd roostixPortfolio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```
   El proyecto estará disponible en `http://localhost:5173`

4. **Compilar para producción**
   ```bash
   npm run build
   ```
   Los archivos compilados se generarán en la carpeta `dist/`

5. **Previsualizar build de producción**
   ```bash
   npm run preview
   ```

6. **Ejecutar linter**
   ```bash
   npm run lint
   ```

## 📁 Estructura del Proyecto

```
roostixPortfolio/
├── public/                 # Archivos estáticos públicos
├── src/
│   ├── assets/             # Recursos (imágenes, iconos)
│   │   ├── icons/
│   │   └── sources/
│   │       └── translations.ts  # Traducciones ES/EN
│   ├── components/         # Componentes reutilizables
│   │   └── ui/            # Componentes UI (Button, Card, etc.)
│   ├── contexts/          # Contextos de React
│   │   └── TranslationContext.tsx  # Contexto de traducción
│   ├── layouts/           # Componentes de layout
│   │   ├── Navbar/
│   │   ├── Section/
│   │   ├── SectionCard/
│   │   ├── Portfolio/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── lib/               # Utilidades
│   │   └── utils.ts
│   ├── App.tsx            # Componente principal
│   ├── main.tsx           # Punto de entrada
│   └── global.css         # Estilos globales
├── index.html
├── package.json
├── tsconfig.json          # Configuración TypeScript
├── vite.config.ts         # Configuración Vite
└── README.md
```

## 🌐 Sistema de Traducción

El proyecto incluye un sistema de traducción multiidioma (Español/Inglés) implementado con React Context API.

### Uso en Componentes

```typescript
import { useTranslation } from "@/contexts/TranslationContext";

function MyComponent() {
  const { t, language, setLanguage } = useTranslation();
  
  return (
    <div>
      <h1>{t('hero_dawn')}</h1>
      <button onClick={() => setLanguage('es')}>ES</button>
      <button onClick={() => setLanguage('en')}>EN</button>
    </div>
  );
}
```

### Agregar Nuevas Traducciones

Edita el archivo `src/assets/sources/translations.ts` y agrega las nuevas claves en ambos idiomas:

```typescript
export const translations: Translations = {
  en: {
    nueva_clave: 'New Key',
    // ...
  },
  es: {
    nueva_clave: 'Nueva Clave',
    // ...
  }
};
```

## 🎨 Características

- ✅ **Multiidioma**: Soporte para Español e Inglés
- ✅ **Responsive**: Diseño adaptable a todos los dispositivos
- ✅ **TypeScript**: Tipado estático para mayor seguridad
- ✅ **Componentes Modulares**: Arquitectura basada en componentes
- ✅ **shadcn/ui**: Componentes UI accesibles y personalizables
- ✅ **Tailwind CSS**: Estilos utilitarios modernos
- ✅ **Hot Module Replacement**: Recarga rápida en desarrollo

## 🧩 shadcn/ui

Este proyecto utiliza [shadcn/ui](https://ui.shadcn.com/), un sistema de componentes construido sobre Radix UI y Tailwind CSS. Los componentes son copiados directamente a tu proyecto, lo que te da control total sobre el código.

### Configuración

El proyecto está configurado con el estilo **"new-york"** de shadcn/ui. La configuración se encuentra en `components.json`:

```json
{
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui"
  }
}
```

### Componentes Instalados

Los siguientes componentes de shadcn/ui están disponibles en el proyecto:

- **Button** (`src/components/ui/button.tsx`)
- **Card** (`src/components/ui/card.tsx`)
- **Menubar** (`src/components/ui/menubar.tsx`)

### Uso de Componentes

Los componentes se importan directamente desde `@/components/ui`:

```typescript
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mi Título</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="default">Click me</Button>
      </CardContent>
    </Card>
  );
}
```

### Agregar Nuevos Componentes de shadcn/ui

Para agregar nuevos componentes de shadcn/ui al proyecto:

1. **Usando la CLI de shadcn** (recomendado):
   ```bash
   npx shadcn@latest add [component-name]
   ```
   
   Ejemplos:
   ```bash
   npx shadcn@latest add dialog
   npx shadcn@latest add dropdown-menu
   npx shadcn@latest add input
   ```

2. **Manualmente**: 
   - Visita [shadcn/ui](https://ui.shadcn.com/docs/components)
   - Copia el código del componente
   - Pégalo en `src/components/ui/[component-name].tsx`

### Personalización

Los componentes de shadcn/ui son completamente personalizables ya que el código está en tu proyecto. Puedes:

- Modificar estilos directamente en los archivos de componentes
- Agregar nuevas variantes usando `class-variance-authority`
- Extender funcionalidad según tus necesidades

### Variantes de Componentes

Los componentes usan `class-variance-authority` para manejar variantes. Por ejemplo, el Button tiene múltiples variantes:

```typescript
<Button variant="default">Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
```

### Recursos

- [Documentación oficial de shadcn/ui](https://ui.shadcn.com/)
- [Componentes disponibles](https://ui.shadcn.com/docs/components)
- [Temas y personalización](https://ui.shadcn.com/themes)

## 📝 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Compila el proyecto para producción |
| `npm run preview` | Previsualiza el build de producción |
| `npm run lint` | Ejecuta el linter para verificar código |

## 🔧 Configuración

### Alias de Rutas

El proyecto usa alias `@/` para importaciones desde `src/`:

```typescript
// En lugar de:
import { Button } from "../../components/ui/button";

// Usa:
import { Button } from "@/components/ui/button";
```

### Variables de Entorno

Si necesitas variables de entorno, crea un archivo `.env` en la raíz:

```env
VITE_API_URL=https://api.example.com
```

Accede a ellas con `import.meta.env.VITE_API_URL`

## 🚢 Despliegue

### Build de Producción

```bash
npm run build
```

Los archivos optimizados se generarán en `dist/`. Puedes servir esta carpeta con cualquier servidor estático:

- **Netlify**: Arrastra la carpeta `dist/`
- **Vercel**: `vercel --prod`
- **GitHub Pages**: Configura para servir `dist/`
- **Servidor propio**: Copia `dist/` al directorio web

## 📄 Licencia

© 2024 Roostix Software & Solutions. Todos los derechos reservados.

## 👥 Contribución

Para contribuir al proyecto:

1. Crea una rama desde `feature-octavio`
2. Realiza tus cambios
3. Haz commit de tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📞 Contacto

- **Teléfono**: +52 3319429592 / +52 3339575070
- **WhatsApp**: [Chat con nosotros](https://wa.me/523319429592)
- **Sitio Web**: [Roostix](https://roostix.com)

---

**Vigilant. Innovative. Ready.** 🚀
