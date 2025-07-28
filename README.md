# Mapa de Cobertura de Costa Rica

Una aplicación web interactiva construida con React que muestra las zonas de cobertura de servicios de telefonía e internet en Costa Rica.

## Características

- 🗺️ Mapa interactivo usando Google Maps con vista híbrida
- 📁 Carga de datos de cobertura desde archivos KML/KMZ
- 🎯 Controles para seleccionar Provincia, Cantón y Distrito
- 🔍 Zoom automático según la ubicación seleccionada
- 📱 Diseño responsivo para diferentes tamaños de pantalla

## Tecnologías

- React 18
- Vite (build tool)
- Google Maps JavaScript API
- @react-google-maps/api
- CSS modules

## Configuración

1. Instala las dependencias:
```bash
npm install
```

2. Configura tu API key de Google Maps:
   - Copia `.env.example` a `.env`
   - Agrega tu API key de Google Maps a `VITE_GOOGLE_MAPS_API_KEY`

3. Coloca tu archivo de cobertura KMZ en el directorio `public/`

## Desarrollo

Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`

## Compilación

Para compilar el proyecto para producción:

```bash
npm run build
```

Los archivos compilados se generarán en el directorio `dist/`

## Vista previa de producción

Para previsualizar la compilación de producción:

```bash
npm run preview
```

## Estructura del proyecto

```
src/
├── components/
│   ├── MapaCobertura.jsx    # Componente principal del mapa
│   └── MapaCobertura.css    # Estilos del mapa
├── data/
│   └── costaRicaData.js     # Datos de provincias, cantones y distritos
├── App.jsx                  # Componente raíz de la aplicación
├── App.css                  # Estilos globales
└── main.jsx                 # Punto de entrada de la aplicación

public/
├── cobertura.kmz           # Archivo de datos de cobertura
└── logo-ifx--primary.svg  # Logo de la empresa
```

## API de Google Maps

Este proyecto utiliza las siguientes APIs de Google Maps:
- Maps JavaScript API
- Geocoding API
- KML Layer support

Asegúrate de que tu API key tenga habilitados estos servicios.

## Contribución

1. Crea un fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crea un Pull Request+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
