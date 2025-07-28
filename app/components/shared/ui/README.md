# Componentes Base Reutilizables

Esta carpeta contiene todos los componentes base reutilizables del sistema de diseño.

## Componentes Disponibles

### 1. BaseButton

Botón reutilizable con diferentes variantes y tamaños.

```vue
<BaseButton variant="primary" size="md">
  Click me
</BaseButton>
```

**Props:**

- `variant`: 'primary' | 'secondary' | 'tertiary' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `type`: 'button' | 'submit' | 'reset'
- `disabled`: boolean
- `fullWidth`: boolean
- `loading`: boolean

### 2. BaseCard

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

### 3. BaseText

Componente de texto y headings reutilizable.

```vue
<BaseText as="h1" size="4xl" weight="bold" color="primary">
  Título principal
</BaseText>
```

**Props:**

- `as`: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label'
- `size`: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'
- `weight`: 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'
- `color`: 'default' | 'primary' | 'secondary' | 'muted' | 'success' | 'warning' | 'error' | 'white'
- `align`: 'left' | 'center' | 'right' | 'justify'
- `truncate`: boolean
- `lineClamp`: number

### 4. BaseLink

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

### 5. BaseIcon

Iconos reutilizables con diferentes tamaños y colores.

```vue
<BaseIcon name="check" size="md" color="success" />
```

**Props:**

- `name`: string (nombre del icono)
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
- `color`: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'white' | 'gray'
- `strokeWidth`: number
- `fill`: 'none' | 'currentColor'

**Iconos disponibles:**

- check, close, arrowRight, arrowLeft, arrowUp, arrowDown
- plus, minus, search, star, heart, user
- menu, home, settings, info, warning, error, success

### 6. BaseBadge

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

### 7. BaseInput

Inputs reutilizables con diferentes tipos y estados.

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
- `variant`: 'default' | 'error' | 'success'
- `label`: string
- `helperText`: string
- `errorText`: string
- `leftIcon`: string
- `rightIcon`: string
- `clearable`: boolean

### 8. BaseAccordion

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

### 9. BaseSegmentedControl

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

### 10. BaseContainer

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

### 11. BaseBlock

Bloque de contenido reutilizable.

```vue
<BaseBlock variant="elevated" padding="lg" interactive>
  Contenido del bloque
</BaseBlock>
```

**Props:**

- `variant`: 'default' | 'elevated' | 'outlined' | 'flat'
- `padding`: 'none' | 'sm' | 'md' | 'lg' | 'xl'
- `margin`: 'none' | 'sm' | 'md' | 'lg' | 'xl'
- `background`: 'transparent' | 'white' | 'gray' | 'primary' | 'secondary'
- `border`: 'none' | 'top' | 'bottom' | 'all'
- `rounded`: 'none' | 'sm' | 'md' | 'lg' | 'xl'
- `shadow`: 'none' | 'sm' | 'md' | 'lg' | 'xl'
- `hover`: boolean
- `interactive`: boolean
- `fullWidth`: boolean
- `fullHeight`: boolean

### 12. BaseBanner

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

## Uso

Para usar estos componentes, importa los que necesites:

```vue
<script setup>
import { BaseButton, BaseCard, BaseText } from '@/components/shared/base';
</script>

<template>
  <BaseContainer>
    <BaseCard>
      <BaseText as="h1" size="2xl" weight="bold"> Título </BaseText>
      <BaseButton variant="primary"> Botón </BaseButton>
    </BaseCard>
  </BaseContainer>
</template>
```

## Colores del Sistema

Los componentes utilizan el color primario `#1364B3` (azul) como color principal del sistema de diseño.
