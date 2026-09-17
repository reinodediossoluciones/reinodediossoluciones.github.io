# Sitio web — Reino de Dios Soluciones (RDS)

Sitio estático de una sola página, listo para GitHub Pages.

## Estructura
```
index.html          → estructura de la página (no hace falta tocarla)
css/styles.css       → colores, tipografía y diseño (tokens al inicio del archivo)
js/config.js         → TODOS los textos, datos de contacto y tarifas (edita aquí)
js/main.js           → arma la página con los datos de config.js (no hace falta tocarlo)
assets/logo.png       → logo con fondo transparente (para usar sobre cualquier color)
assets/logo.jpg       → logo original tal como lo subiste
assets/favicon.png    → ícono de pestaña del navegador
assets/portafolio/    → carpeta sugerida para las fotos de trabajos (no la agregues hasta tener fotos)
```

## Para cambiar textos o precios
Abre `js/config.js` con cualquier editor de texto (incluso el editor de GitHub en el navegador)
y cambia lo que está entre comillas `" "`. No necesitas tocar HTML ni CSS.

- **Tarifas**: sección `tarifario`, campo `precio`. Puedes dejarlo como `"Cotizar"` o poner
  un valor como `"$120.000"`.
- **Portafolio**: sección `portafolio`. Mientras no tengas fotos, deja `imagen: ""` y se
  muestra un fondo tipo lámina de contenedor. Cuando tengas fotos, súbelas a
  `assets/portafolio/` y pon la ruta, por ejemplo `imagen: "assets/portafolio/carga-1.jpg"`.
- **WhatsApp**: cambia `whatsapp` en la sección `empresa` (solo números, con indicativo,
  sin espacios ni el signo `+`).

## Para cambiar colores o tipografía
Abre `css/styles.css`, la información está en las primeras líneas dentro de `:root`.

## Publicar en GitHub Pages
1. Crea un repositorio en GitHub y sube todo el contenido de esta carpeta a la raíz del repositorio.
2. Ve a **Settings → Pages**.
3. En "Branch", elige `main` (o la rama donde subiste los archivos) y la carpeta `/ (root)`.
4. Guarda. GitHub te dará una URL como `https://tu-usuario.github.io/tu-repo/`.
5. Si luego usas un dominio propio, agrégalo en la misma sección de Pages.

No se necesita ningún proceso de instalación ni build: son archivos estáticos.
