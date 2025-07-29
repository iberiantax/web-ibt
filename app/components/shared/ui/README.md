# Componentes Base Reutilizables

Esta carpeta contiene todos los componentes base reutilizables del sistema de diseño, organizados por categorías funcionales.

## Estructura de Carpetas

```
ui/
├── banners/          # Alertas y notificaciones
├── buttons/          # Botones y controles
├── cards/            # Tarjetas y contenedores
├── feedback/         # Componentes de feedback
├── form/             # Formularios y validación
├── inputs/           # Campos de entrada
├── layout/           # Componentes de layout
├── navigation/       # Navegación y enlaces
├── steppers/         # Steppers y progreso
└── index.ts          # Exportaciones principales
```

## Componentes Disponibles

### 1. Botones (`buttons/`)

#### BaseButton

Botón reutilizable con diferentes variantes y tamaños.

```vue
<BaseButton variant="primary" size="md">
  Click me
</BaseButton>
```

**Props:**

- `variant`: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'outline'
- `size`: 'sm' | 'md' | 'lg'
- `type`: 'button' | 'submit' | 'reset'
- `disabled`: boolean
- `fullWidth`: boolean
- `loading`: boolean

**Uso:**

```vue
<script setup>
import { BaseButton } from '@/components/shared/ui';
</script>

<template>
  <BaseButton variant="primary" size="md" :loading="isLoading"> Enviar </BaseButton>
</template>
```

### 2. Formularios (`form/`)

#### BaseForm

Formulario de contacto completo con validación automática.

```vue
<BaseForm
  title="Contact Us"
  description="Get in touch with us"
  :categories="formCategories"
  @submit="handleFormSubmit"
/>
```

**Props:**

- `title`: string - Título del formulario
- `description`: string - Descripción del formulario
- `categories`: Array - Opciones para el dropdown de categoría
- `submitText`: string - Texto del botón de envío
- `loading`: boolean - Estado de carga del formulario

**Características:**

- Validación automática de todos los campos
- Mensajes de error específicos
- Campos requeridos con asteriscos (\*)
- Variante "form" con fondo blanco y bordes azules
- Evento `submit` que emite los datos del formulario

### 3. Tarjetas (`cards/`)

#### BaseCard

Contenedor de tarjeta con diferentes estilos.

```vue
<BaseCard variant="elevated" padding="lg">
  Contenido de la tarjeta
</BaseCard>
```

**Props:**

- `variant`: 'default' | 'elevated' | 'outlined' | 'flat'
- `padding`: 'none' | 'sm' | 'md' | 'lg'
- `radius`: 'none' | 'sm' | 'md' | 'lg' | 'xl'
- `hover`: boolean
- `interactive`: boolean

#### BaseInfoCard

Tarjeta especializada para información.

```vue
<BaseInfoCard title="Información" icon="info">
  Contenido informativo
</BaseInfoCard>
```

#### BaseReportsCard

Tarjeta especializada para reportes y datos.

```vue
<BaseReportsCard title="Reporte Fiscal" :data="reportData">
  Datos del reporte
</BaseReportsCard>
```

### 4. Inputs (`inputs/`)

#### BaseInput

Input reutilizable con diferentes tipos y estados.

```vue
<BaseInput
  v-model="value"
  type="email"
  placeholder="Email"
  label="Email"
  leftIcon="user"
  clearable
/>
```

**Props:**

- `type`: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
- `placeholder`: string
- `value`: string | number
- `disabled`: boolean
- `readonly`: boolean
- `required`: boolean
- `size`: 'sm' | 'md' | 'lg'
- `variant`: 'default' | 'error' | 'success' | 'white' | 'blue' | 'form'
- `label`: string
- `helperText`: string
- `errorText`: string
- `leftIcon`: string
- `rightIcon`: string
- `clearable`: boolean

#### BaseTextarea

Área de texto multilínea.

```vue
<BaseTextarea v-model="content" placeholder="Escribe tu mensaje..." rows="4" maxLength="500" />
```

**Props:**

- `variant`: 'default' | 'error' | 'success' | 'white' | 'blue' | 'form'
- `rows`: number - Número de filas
- `maxLength`: number - Longitud máxima de caracteres
- `resize`: 'none' | 'vertical' | 'horizontal' | 'both'

#### BaseCheckbox

Checkbox con estados personalizados.

```vue
<BaseCheckbox v-model="checked" label="Acepto los términos" required />
```

### 4. Navegación (`navigation/`)

#### BaseLink

Enlaces reutilizables con diferentes estilos.

```vue
<BaseLink href="/about" variant="primary" external>
  Enlace externo
</BaseLink>
```

**Props:**

- `href`: string
- `variant`: 'default' | 'primary' | 'secondary' | 'underline' | 'button'
- `size`: 'sm' | 'md' | 'lg'
- `external`: boolean
- `disabled`: boolean
- `underline`: boolean

#### BaseDropdown

Menús desplegables.

```vue
<BaseDropdown :items="menuItems" trigger="click">
  <template #trigger>
    <BaseButton>Menú</BaseButton>
  </template>
</BaseDropdown>
```

**Props:**

- `variant`: 'default' | 'error' | 'success' | 'white' | 'blue' | 'form'
- `options`: Array - Opciones del dropdown
- `placeholder`: string - Texto de placeholder

### 5. Layout (`layout/`)

#### BaseContainer

Contenedor reutilizable para layouts.

```vue
<BaseContainer maxWidth="lg" padding="md" background="white">
  Contenido del contenedor
</BaseContainer>
```

**Props:**

- `maxWidth`: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'none'
- `padding`: 'none' | 'sm' | 'md' | 'lg' | 'xl'
- `margin`: 'none' | 'sm' | 'md' | 'lg' | 'xl'
- `background`: 'transparent' | 'white' | 'gray' | 'primary' | 'secondary'
- `border`: 'none' | 'top' | 'bottom' | 'all'
- `rounded`: 'none' | 'sm' | 'md' | 'lg' | 'xl'
- `shadow`: 'none' | 'sm' | 'md' | 'lg' | 'xl'
- `center`: boolean
- `fluid`: boolean

#### BaseAccordion

Acordeón reutilizable con animaciones.

```vue
<BaseAccordion title="Sección 1" variant="elevated">
  Contenido del acordeón
</BaseAccordion>
```

**Props:**

- `title`: string
- `defaultOpen`: boolean
- `variant`: 'default' | 'bordered' | 'elevated'
- `size`: 'sm' | 'md' | 'lg'
- `disabled`: boolean

#### BaseBadge

Badges y ratings reutilizables.

```vue
<BaseBadge variant="success" size="md" dot>
  Badge con punto
</BaseBadge>

<BaseBadge :rating="4.5" :maxRating="5" showValue />
```

**Props:**

- `variant`: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
- `size`: 'sm' | 'md' | 'lg'
- `rounded`: boolean
- `dot`: boolean
- `removable`: boolean
- `rating`: number
- `maxRating`: number
- `showValue`: boolean

#### BaseCarousel

Carrusel de elementos.

```vue
<BaseCarousel :items="carouselItems" autoplay>
  <template #item="{ item }">
    <div>{{ item.title }}</div>
  </template>
</BaseCarousel>
```

### 6. Feedback (`feedback/`)

#### BaseSearch

Componente de búsqueda.

```vue
<BaseSearch
  v-model="searchQuery"
  placeholder="Buscar..."
  :results="searchResults"
  @search="handleSearch"
/>
```

#### BaseSegmentedControl

Control segmentado reutilizable.

```vue
<BaseSegmentedControl
  v-model="selectedValue"
  :segments="[
    { value: 'option1', label: 'Opción 1' },
    { value: 'option2', label: 'Opción 2' },
  ]"
  variant="elevated"
/>
```

**Props:**

- `segments`: Segment[]
- `modelValue`: string | number
- `size`: 'sm' | 'md' | 'lg'
- `variant`: 'default' | 'elevated' | 'outlined'
- `fullWidth`: boolean
- `disabled`: boolean

### 7. Banners (`banners/`)

#### BaseBanner

Banner y alertas reutilizables.

```vue
<BaseBanner variant="success" title="Éxito" dismissible>
  Operación completada correctamente
</BaseBanner>
```

**Props:**

- `variant`: 'info' | 'success' | 'warning' | 'error' | 'primary'
- `size`: 'sm' | 'md' | 'lg'
- `dismissible`: boolean
- `icon`: string
- `title`: string
- `fullWidth`: boolean
- `rounded`: boolean

### 8. Steppers (`steppers/`)

#### BaseStepper

Stepper vertical básico.

```vue
<BaseStepper :steps="steps" :currentStep="currentStep" @step-change="handleStepChange" />
```

#### BaseStepperHorizontal

Stepper horizontal.

```vue
<BaseStepperHorizontal :steps="steps" :currentStep="currentStep" variant="elevated" />
```

#### BaseStepperVertical

Stepper vertical especializado.

```vue
<BaseStepperVertical :steps="steps" :currentStep="currentStep" showProgress />
```

## Uso General

### Importación Individual

```vue
<script setup>
import { BaseButton } from '@/components/shared/ui/buttons';
import { BaseCard } from '@/components/shared/ui/cards';
import { BaseForm } from '@/components/shared/ui/form';
import { BaseInput } from '@/components/shared/ui/inputs';
</script>
```

### Importación desde el Índice Principal

```vue
<script setup>
import { BaseButton, BaseCard, BaseForm, BaseInput } from '@/components/shared/ui';
</script>
```

### Ejemplo Completo

```vue
<template>
  <BaseContainer maxWidth="lg" padding="md">
    <BaseCard variant="elevated" padding="lg">
      <BaseText as="h1" size="2xl" weight="bold" color="primary"> Formulario de Contacto </BaseText>

      <BaseInput v-model="email" type="email" placeholder="Tu email" label="Email" required />

      <BaseTextarea v-model="message" placeholder="Tu mensaje" rows="4" />

      <BaseButton variant="primary" :loading="isSubmitting"> Enviar </BaseButton>
    </BaseCard>
  </BaseContainer>
</template>

<script setup>
import {
  BaseContainer,
  BaseCard,
  BaseInput,
  BaseTextarea,
  BaseButton,
} from '@/components/shared/ui';

const email = ref('');
const message = ref('');
const isSubmitting = ref(false);
</script>
```

## Colores del Sistema

Los componentes utilizan el color primario `#1364B3` (azul) como color principal del sistema de diseño.

### Paleta de Colores

- **Primary**: `#1364B3` (Azul corporativo)
- **Secondary**: `#6B7280` (Gris medio)
- **Success**: `#10B981` (Verde)
- **Warning**: `#F59E0B` (Amarillo)
- **Error**: `#EF4444` (Rojo)
- **Info**: `#3B82F6` (Azul claro)

## Convenciones de Nomenclatura

- Todos los componentes base empiezan con `Base`
- Los nombres son en PascalCase
- Las props siguen camelCase
- Los eventos siguen kebab-case

## Accesibilidad

Todos los componentes incluyen:

- Soporte para navegación por teclado
- Atributos ARIA apropiados
- Contraste de colores accesible
- Estados de focus visibles
- Textos alternativos para iconos

## Responsive Design

Los componentes están optimizados para:

- Mobile First
- Breakpoints personalizados
- Espaciado adaptativo
- Tipografía fluida
- Touch-friendly en móviles
