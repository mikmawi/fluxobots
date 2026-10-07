# Fluxobots: contexto del proyecto

Fluxobots es una startup que ofrece un **Agente de IA conectado a WhatsApp y OpenAI**. El agente responde por el negocio y se encarga de:

- atender consultas
- agendar citas
- ofrecer productos y servicios
- enviar recordatorios
- lanzar campañas masivas
- hacer seguimiento y fidelizar a clientes y pacientes

Atiende dos públicos con el mismo producto: **comercios** (tiendas, restaurantes, e-commerce) y **salud** (clínicas, consultorios, odontología, estética).

- Sitio: https://fluxobots.com (repo `mikmawi/fluxobots`, rama `main`). Vercel publica `main` automáticamente.
- Contacto: WhatsApp 098 410 7589 (+593 98 410 7589), enlace `https://wa.me/593984107589`.
- Idioma de todo el contenido: español (Ecuador). Trato de "tú".

## Siguiente paso

Diseñar la **app que usarán los negocios** (panel del cliente de Fluxobots) con la **misma identidad visual** de la landing. Por definir con el usuario:

- plataforma (web app, móvil o ambas)
- pantallas: bandeja de conversaciones, agenda/calendario, catálogo, campañas, contactos/pacientes, recordatorios, métricas, configuración del agente, traspaso a humano

---

## Identidad visual (aplicarla igual en la app)

Dirección acordada con el usuario a partir de sus referencias (apps LAZY, Wupex, Kreo, Clayro, HBOX y una app de hábitos con píldoras de colores). El usuario **rechazó** el morado translúcido con degradados porque es un estilo muy común.

**Reglas:**

- Colores **planos y saturados**: violeta eléctrico, lima, negro y blanco. Nada de degradados, vidrio ni transparencias.
- Formas de **píldora** (radio 999px) y tarjetas muy redondeadas (28–36px).
- Mucho contraste. Fondos de sección de un solo color que se alternan: violeta / blanco / negro / lima / lila claro.

### Tokens

```css
--violet:#5b21f5;   /* color principal de marca, fondos de impacto, botones del chat */
--lime:#d6ff3d;     /* acento: resaltados, etiquetas, CTA principal */
--ink:#0e0b14;      /* negro de marca: texto, secciones oscuras, íconos */
--paper:#ffffff;
--mist:#f1edff;     /* fondo claro alterno */
--grey:#5d5873;     /* texto secundario */
/* Colores de sticker / tarjeta (categorías, funciones, estados) */
--pink:#ff8ac8; --orange:#ff7a3d; --sky:#9cc5ff; --green:#2fd27a; --yellow:#ffe14d;
--wa-bubble:#dcf8c6; /* solo para burbujas del cliente en mockups de WhatsApp */
--ease:cubic-bezier(.2,.8,.2,1);
```

### Tipografía (Google Fonts)

- **Unbounded** 700/800 para títulos, números grandes y stickers. Es ancha, gruesa y con `letter-spacing:-.02em`.
- **Manrope** 400–800 para texto, botones y etiquetas.
- Etiquetas de sección ("tag"): píldora negra con texto lima (o lima con texto negro sobre fondos oscuros), MAYÚSCULAS, 12px, `letter-spacing:.14em`.

### Elementos de la marca

- **Stickers**: píldoras de color con texto en Unbounded, giradas entre −14° y 12°, sombra suave, flotando con la animación `bob`. Palabras clave: Atiende, Agenda, Vende, Recuerda, Campañas, Fideliza, 24/7.
- **Cintas diagonales** (−2° a −4°): negras o lima, con texto en marquee infinito y separador `✦` en lima o violeta.
- **Resaltado lima** detrás de palabras clave de los títulos (`.hl`), que se "pinta" de izquierda a derecha.
- **Anillos concéntricos** detrás del objeto principal (teléfono, QR) que laten hacia afuera.
- **Destellos** (ícono de rayo blanco) que titilan.
- **Mockup de WhatsApp**:
  - Cabecera violeta, avatar lima con el logo.
  - Burbujas del cliente verde WhatsApp a la derecha.
  - Burbujas del agente blancas a la izquierda, con la etiqueta "Agente IA" en píldora lima.
  - Botones de respuesta rápida como píldoras violetas.
- **Lista "tachada"** (estilo app de hábitos): filas en píldora de colores con el problema tachado y una fila final negra con texto lima ("Tu agente en WhatsApp").
- **Íconos**: trazo de línea estilo Lucide (stroke 2.2, puntas redondeadas), dentro de un círculo negro con ícono lima. Nunca emojis como íconos.
- **Logo**:
  - `img/logo-blanco.png` sobre violeta o negro.
  - `img/logo-transparente.png` sobre blanco o lima.
  - Ícono de app y favicon: la "F" sobre fondo lima (`img/apple-touch-icon.png`, `img/favicon.png`).

### Movimiento

- Revelado al hacer scroll: sube 40px y aparece en 0.8s con `--ease`, escalonado.
- Stickers que entran con rebote (`cubic-bezier(.34,1.7,.5,1)`).
- Chats que se escriben solos: indicador de "escribiendo…" y luego el mensaje, en bucle.
- Hover: tarjetas que suben y giran ±1.5°, filas que se desplazan.
- Respetar siempre `prefers-reduced-motion` y mostrar el contenido completo sin JavaScript.

### Voz y copy

Directo, cercano y concreto, en segunda persona ("tu negocio", "tus clientes y pacientes").

Frases de marca:
- "¿Y si tu negocio pudiera vender y atender mientras duermes?"
- "No es un chatbot de preguntas. Es tu mejor empleado."
- "El empleado del mes ya está listo para empezar."
- "La lealtad no se pide. Se cuida."

---

## Archivos del sitio

| Archivo | Qué es |
|---|---|
| `index.html` | Landing principal animada, autocontenida (CSS y JS en línea). Es la referencia de la identidad. |
| `brochure.html` | Solo redirige a `/` (`noindex`). |
| `sitio.html` | Portada anterior del sitio, sin enlaces desde la landing. |
| `inicio.html`, `quienes-somos.html`, `style.css`, `script.js` | Sitio anterior (estilo viejo, Montserrat/Orbitron). |
| `pdf/brochure-fluxobots.pdf` | Brochure en PDF de 10 páginas (1200×675), con la paleta violeta/lima de la v2. |
| `img/og-fluxobots.jpg` | Imagen para compartir (Open Graph) de 1200×630. |
| `img/qr-whatsapp.svg` | QR que abre WhatsApp con el mensaje "Hola Fluxobots, quiero probar el Agente IA". |
| `robots.txt`, `sitemap.xml` | Para buscadores. Dominio canónico: `https://fluxobots.com/` (sin www). |

## Historial (octubre 2026)

1. Se revisó el brochure original de Canva (morado degradado, inconsistente, con textos de relleno).
2. Brochure HTML v1 con colores de la web anterior (violeta y cian con degradado). El usuario lo rechazó por ser un estilo muy común.
3. Brochure v2 con la identidad actual, a partir de las referencias del usuario. Le encantó.
4. El brochure pasó a ser la portada (`index.html`) y luego una landing con scroll y animaciones (PRs #1–#3).
5. Se agregaron SEO, Open Graph/Twitter, JSON-LD (Organization, WebSite, Service), favicon, robots y sitemap (PR #4).

## Pendiente de confirmar con el usuario

- Cifras del contenido: "menos de 5 s" de respuesta y 98 % de apertura (marcado como promedio de la industria).
- Integraciones mencionadas: Google Calendar, Sheets/CRM, entender audios.
- Si el dominio principal en Vercel es `fluxobots.com` o `www.fluxobots.com` (afecta al canonical).
- Si "Asys Machala Dent" (aparecía en el brochure original de Canva) es cliente real y puede usarse como testimonio.

## Cómo trabajar en este repo

- Antes de un PR, previsualizar con Playwright (Chromium en `/opt/pw-browsers`; `playwright` está instalado de forma global en Node).
- Cada cambio va por PR a `main`. El usuario ha pedido unirlos directamente para que Vercel los publique.
