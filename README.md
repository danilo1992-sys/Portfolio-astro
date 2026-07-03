# 🌟 **magical-meridian**  

> **Una landing‑page personal creada con Astro + React + Tailwind**  
> _Presenta a Danilo, su experiencia, proyectos y contacto en un sitio optimizado para escritorio y móvil._

## 📦  Versión  
![Version](https://img.shields.io/npm/v/magical-meridian?style=flat-square)  

## 🛠️ Tecnologías  
| Tecnologia | Uso |
|------------|-----|
| **Astro** | Renderizado React + generación estática |
| piisost | Tailwind CSS (utility‑first) |
| **React** | Componentes reutilizables |
| **TypeScript** | Tipado estático |
| **Playwright** | Tests de smoke y emulación móvil |
| **Prettier** | ASK está formateado |
| **Fontsource** | Fuente Onest variable |

## ✨ Características  
| # | Feature | Descripción |
|---|---------|-------------|
| 1️⃣ | **Páginas multilingües** | Soporta Español e Inglés dinámicamente, detectado vía URL con `getLangFromUrl`. |
| 2️⃣ | **Tema oscuro** | Controlado por `darkMode: 'class'` en Tailwind. |
| 3️⃣ | **Responsive** | Diseño → Tailwind + configuración de viewport para móviles en Playwright. |
| 4️⃣ | **Test móvil** | `npx playwright test --project=chromium-mobile` → verifica carga en móviles. |
| 5️⃣ | **Componentes React** | Reutilización de secciones como “Experiencia”, “Proyectos” y “Contacto”. |
| 6️⃣ | **Formularios de contacto** | Sección “Contactos” con campos de name, email y detalles. |
| 7️⃣ | **Credenciales** | Enlaces a repositorios y certificados automáticamente localizados en UI. |
| 8️⃣ | **Build optimizado** | `astro build` crea carpeta `dist` lista para producción. |

## 🚀 Instalación y uso

```bash
# 1️⃣ Clonar el repositorio
git clone https://github.com/[usuario]/magical-meridian.git
cd magical-meridian

# 2️⃣ Instalar dependencias
npm i

# 3️⃣ Desarrollo local
npm run dev      # o `npm start`

# 4️⃣ Ver enCause: abre https://localhost:3000

# 5️⃣ Construir para producción
npm run build    # ./dist

# 6️⃣ Preview de build
npm run preview  # http://localhost:4511

# 7️⃣ Tests (incluye emulación móvil)
npm test:mobile  -niň ```

> **Tip:** Cada archivo Astro (`*.astro`) puede contener HTML, CSS de Tailwind y lógica React. Los textos están centralizados en `src/i18n/ui.ts`.

## 📚 Testing

El proyecto viene con una suite de smoke tests de Playwright que comprueba que la página carga en viewport móvil. Ejecuta:

```bash
npx playwright test --project=chromium-mobile
```

Para ejecutar todos los tests dekening:

```bash
npm run test:mobile
```

> Los tests están ubicados en `tests/mobile.spec.ts`.

## 🤝 Contribuciones

¡Nos encantaría recibir tus mejoras!  
1. **Fork** el repositorio.  
2. Haz un branch descriptivo (`feature/nueva-seccion`, `bug/corregir-formato`…).  
3. Envía un **Pull Request** con una descripción clara y pruebas (si aplica).  
4. Asegúrate de que pasa `npm run build` y cualquier test nuevo.

### Buenas prácticas  
- Usa **Prettier** (`npx prettier --write .`).  
- Mantén el tipado **Type reducción** → `tsc --noEmit`.  
- Describa los cambios en la UI en `i18n/ui.ts` para todas las localizaciones.  
- Si modifica estilos, actualice `tailwind.config.mjs` según sea necesario.

## 📄 Licencia

MIT © 2024 Danilo Cáceres

---  

¡Gracias por visitar `magical-meridian`!  
Si te gusta el proyecto, pulsa ⭐ y mantén el desarrollo en marcha. 🚀