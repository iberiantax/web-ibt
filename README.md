# IberianTax - Web Application

## 📋 Descripción General

IberianTax es una aplicación web moderna construida con **Nuxt 4**, diseñada para servicios de asesoría fiscal y tributaria. La aplicación está completamente optimizada para SEO, multiidioma y responsive design.

## 🚀 Tecnologías Principales

- **Framework**: Nuxt 4 (Vue 3)
- **Lenguaje**: TypeScript
- **Styling**: Tailwind CSS
- **Gestión de Estado**: TanStack Vue Query
- **Internacionalización**: Nuxt i18n
- **SEO**: Nuxt Sitemap & Robots
- **Iconos**: Lucide Vue Next
- **Linting**: ESLint + Prettier

## 📦 Dependencias

### Dependencias Principales

```json
{
  "@nuxtjs/axios": "^5.13.6",
  "@nuxtjs/i18n": "^10.0.2",
  "@nuxtjs/robots": "^5.4.0",
  "@nuxtjs/sitemap": "^7.4.3",
  "@tanstack/vue-query": "^5.83.0",
  "lucide-vue-next": "^0.525.0",
  "nuxt": "^4.0.1",
  "vue": "^3.5.17",
  "vue-router": "^4.5.1"
}
```

### Dependencias de Desarrollo

```json
{
  "@nuxtjs/tailwindcss": "^6.14.0",
  "eslint": "^9.31.0",
  "eslint-plugin-vue": "^10.3.0",
  "prettier": "^3.6.2",
  "prettier-plugin-tailwindcss": "^0.6.14"
}
```

## ⚙️ Configuración del Proyecto

### Nuxt Configuration (`nuxt.config.ts`)

```typescript
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxtjs/sitemap', '@nuxtjs/robots', '@nuxtjs/tailwindcss'],
  css: ['@/assets/css/main.css'],
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
        },
      ],
    },
  },
  site: {
    url: 'https://www.iberiantax.com',
    name: 'IberianTax',
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
      { code: 'es', iso: 'es-ES', name: 'Español', file: 'es.json' },
    ],
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    customRoutes: 'config',
    pages: {
      about: {
        en: '/about-us',
        es: '/sobre-nosotros',
      },
      blog: {
        en: '/blog',
        es: '/blog',
      },
    },
  },
});
```

### Tailwind CSS Configuration (`tailwind.config.ts`)

#### Sistema de Colores Personalizado

- **Neutral**: 0-950 (escala completa)
- **Blue**: 50-900 (paleta azul corporativa)
- **Green**: 50-900 (acentos verdes)
- **Orange**: 50-900 (llamadas a la acción)
- **Yellow**: 50-900 (destacados)

#### Sistema de Espaciado

Basado en tokens de Figma:

- `0` a `500` (escala completa)
- Valores en rem para compatibilidad
- Espaciado personalizado adicional

#### Sistema de Tipografía

**Fuente Principal**: DM Sans (completa con todas las variantes)

**Jerarquía Tipográfica**:

- **H1**: 48px-64px (responsive)
- **H2**: 40px-52px (responsive)
- **H3**: 32px-40px (responsive)
- **H4**: 24px-32px (responsive)
- **H5**: 20px-24px (responsive)
- **H6**: 18px-20px (responsive)
- **Body**: 18px (fijo)
- **Small**: 14px (fijo)

#### Breakpoints Responsive

```css
xs: '475px'
sm: '640px'
md: '768px'
lg: '1024px'
xl: '1280px'
2xl: '1536px'
s: '320px'
m: '769px'
l: '1201px'
xl-custom: '1680px'
```

### TypeScript Configuration (`tsconfig.json`)

Configuración estándar de Nuxt con referencias a archivos de configuración generados automáticamente.

### ESLint Configuration (`eslint.config.ts`)

Configuración con Vue + TypeScript + Prettier para mantener consistencia de código.

## 🎨 Sistema de Diseño

### Estructura de Componentes

```
app/components/
├── hero/
│   └── HeroSection.vue
├── home/
│   ├── CardsHome.vue
│   ├── FAQ.vue
│   ├── FileNowCard.vue
│   ├── HappyClients.vue
│   ├── HowItWorks.vue
│   ├── InfoCard.vue
│   ├── PricingPlans.vue
│   ├── SuccessCard.vue
│   ├── TrustSection.vue
│   └── WhyUs.vue
├── layout/
│   ├── AppFooter.vue
│   └── AppHeader.vue
└── shared/
    ├── buttons/
    │   └── BaseButton.vue
    ├── icons/
    │   ├── FacebookIcon.vue
    │   ├── GoogleLogo.vue
    │   ├── InstagramIcon.vue
    │   ├── LinkedinIcon.vue
    │   └── TrustpilotLogo.vue
    ├── logos/
    │   └── logo.vue
    └── ui/
        ├── BaseAccordion.vue
        ├── BaseBadge.vue
        ├── BaseCard.vue
        ├── BaseCarousel.vue
        ├── BaseCheckbox.vue
        ├── BaseContainer.vue
        ├── BaseDropdown.vue
        ├── BaseInput.vue
        ├── BaseLink.vue
        ├── BaseSearch.vue
        ├── BaseSegmentedControl.vue
        ├── BaseStepper.vue
        ├── BaseTextarea.vue
        └── index.ts
```

### Páginas Disponibles

```
app/pages/
├── index.vue (Home)
├── about.vue (Sobre Nosotros)
├── design-system.vue (Sistema de Diseño)
├── blog/
│   └── index.vue
└── calculators/
    ├── index.vue
    └── imputed-income.vue
```

## 🌐 Internacionalización (i18n)

### Configuración

- **Idioma por defecto**: Inglés (`en`)
- **Estrategia**: `prefix_except_default`
- **Idiomas soportados**: Inglés, Español

### Estructura de Archivos

```
i18n/locales/
├── en.json
└── es.json
```

### Rutas Personalizadas

- `/about-us` (EN) ↔ `/sobre-nosotros` (ES)
- `/blog` (ambos idiomas)

## 📁 Estructura de Assets

### Fuentes

```
app/assets/fonts/dmSans/
├── DMSans-Bold.ttf
├── DMSans-BoldItalic.ttf
├── DMSans-ExtraBold.ttf
├── DMSans-ExtraBoldItalic.ttf
├── DMSans-ExtraLight.ttf
├── DMSans-ExtraLightItalic.ttf
├── DMSans-Italic.ttf
├── DMSans-Light.ttf
├── DMSans-LightItalic.ttf
├── DMSans-Medium.ttf
├── DMSans-MediumItalic.ttf
├── DMSans-Regular.ttf
├── DMSans-SemiBold.ttf
├── DMSans-SemiBoldItalic.ttf
├── DMSans-Thin.ttf
└── DMSans-ThinItalic.ttf
```

### Imágenes

```
public/images/
├── hero/
│   └── FrameHero.png
└── png/
    ├── Logo/
    │   ├── AEDAF.png
    │   ├── Agencia Tributaria.png
    │   ├── AT.png
    │   ├── El Pais.png
    │   ├── Enisa.png
    │   ├── Mallorca.png
    │   └── Olive.png
    └── Logo.png
```

### Iconos SVG

```
public/svg/
├── accurate.svg
├── arrow.svg
├── calculator.svg
├── capital-gain.svg
├── card.svg
├── clock.svg
├── company.svg
├── euro.svg
├── google.svg
├── home.svg
├── info.svg
├── person.svg
├── secure.svg
├── security.svg
├── star.svg
├── starHome.svg
└── world.svg
```

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run generate     # Generación estática
npm run preview      # Preview de producción

# Linting y Formateo
npm run lint         # ESLint con auto-fix
npm run format       # Prettier formateo
```

## 📱 Características Técnicas

### SEO Optimizado

- **Sitemap automático**: `/sitemap.xml`
- **Robots.txt**: Configurado automáticamente
- **Meta tags**: Viewport optimizado
- **URLs amigables**: Multiidioma

### Performance

- **SSR habilitado**: Mejor SEO y performance
- **Fuentes optimizadas**: `font-display: swap`
- **Imágenes optimizadas**: Estructura organizada
- **CSS optimizado**: Tailwind purged

### Responsive Design

- **Breakpoints personalizados**: 320px - 1680px
- **Tipografía fluida**: Clamp CSS
- **Espaciado adaptativo**: Sistema basado en Figma

### Accesibilidad

- **Contraste optimizado**: Paleta de colores accesible
- **Navegación por teclado**: Componentes accesibles
- **Semántica HTML**: Estructura semántica correcta

## 🔧 Configuración de Desarrollo

### Requisitos del Sistema

- **Node.js**: 18+ (recomendado)
- **Package Manager**: npm, pnpm, yarn, o bun
- **Navegador**: Chrome, Firefox, Safari, Edge

### Variables de Entorno

```bash
# .env (crear si es necesario)
NODE_ENV=development
NUXT_PUBLIC_SITE_URL=https://www.iberiantax.com
```

### Comandos de Instalación

```bash
# Instalar dependencias
npm install

# O con otros gestores
pnpm install
yarn install
bun install
```

## 📊 Monitoreo y Analytics

### Herramientas Integradas

- **Nuxt DevTools**: Habilitado en desarrollo
- **Vue DevTools**: Compatible
- **Lighthouse**: Optimizado para métricas

### Métricas de Performance

- **Core Web Vitals**: Optimizado
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

## 🚀 Deployment

### Plataformas Soportadas

- **Vercel**: Configuración automática
- **Netlify**: Compatible
- **Nuxt Hosting**: Optimizado
- **VPS**: Configuración manual

### Build Commands

```bash
# Build de producción
npm run build

# Generación estática (SSG)
npm run generate

# Preview local
npm run preview
```

## 📝 Notas de Desarrollo

### Convenciones de Código

- **Vue 3 Composition API**: Uso preferido
- **TypeScript**: Tipado estricto
- **Tailwind CSS**: Clases utilitarias
- **ESLint + Prettier**: Formateo automático

### Estructura de Archivos

- **Páginas**: `app/pages/`
- **Componentes**: `app/components/`
- **Layouts**: `app/layouts/`
- **Assets**: `app/assets/`
- **Plugins**: `app/plugins/`

### Optimizaciones Implementadas

- **Code splitting**: Automático con Nuxt
- **Lazy loading**: Componentes y rutas
- **Image optimization**: Optimización automática
- **Font loading**: Optimizado con `font-display: swap`

---

## 📞 Soporte

Para cualquier pregunta sobre la configuración o desarrollo, consulta la documentación oficial de [Nuxt](https://nuxt.com/docs) o contacta al equipo de desarrollo.

**Versión**: 1.0.0  
**Última actualización**: 2024  
**Framework**: Nuxt 4  
**Lenguaje**: TypeScript + Vue 3
