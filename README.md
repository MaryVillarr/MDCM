# Mundo de COLOR Marvi

Sitio web oficial de **Mundo de COLOR Marvi**, diseñado como catálogo inclusivo de libros y colecciones para colorear.

## Requisitos

- Node.js 20 o superior
- npm

## Ejecutar en tu computadora

```bash
npm install
npm run dev
```

Después abre la dirección que aparecerá en la terminal.

## Configurar WhatsApp

Abre el archivo `app/page.tsx` y busca la constante:

```tsx
const whatsapp = "https://wa.me/?text=...";
```

Reemplázala por tu número comercial usando el código de Perú, sin espacios ni el símbolo `+`:

```tsx
const whatsapp = "https://wa.me/51XXXXXXXXX?text=Hola...";
```

## Archivos principales

- `app/page.tsx`: contenido y estructura de la página.
- `app/globals.css`: identidad visual y diseño adaptable.
- `app/layout.tsx`: título y descripción para buscadores.
- `public/logo-marvi.png`: logotipo de la marca.

## Subir a GitHub

1. Crea un repositorio vacío en GitHub.
2. Descomprime este proyecto.
3. Abre una terminal dentro de la carpeta.
4. Ejecuta:

```bash
git init
git add .
git commit -m "Sitio web Mundo de COLOR Marvi"
git branch -M main
git remote add origin URL_DE_TU_REPOSITORIO
git push -u origin main
```

© 2026 Mundo de COLOR Marvi.
