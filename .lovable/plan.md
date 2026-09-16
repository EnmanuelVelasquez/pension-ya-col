# Pensión Global

## Objetivo
Crear una experiencia web móvil, institucional y confiable para consultar, pagar y descargar el soporte de la pensión en Colombia.

## Alcance
- **Inicio:** saludo, estado visible de la planilla de septiembre de 2026, total pendiente y acceso directo al pago.
- **Historial:** recibos recientes con mes, año, valor y acción de descarga.
- **Pago:** desglose entre aporte PILA y comisión, selector de Tarjeta, PSE o Apple Pay, y confirmación.
- **Éxito:** confirmación de transacción, referencia, descarga del soporte y regreso al inicio.
- Navegación real entre las tres pantallas, estados seleccionables y descarga de un soporte de demostración.

## Dirección visual
- Azul marino y blanco como base, verde reservado para confirmaciones.
- Tipografía grande, sobria y legible; superficies nítidas y compactas.
- Diseño mobile-first, adaptado también a escritorio sin convertirlo en una página promocional.
- Sin login, suscripciones, gráficas, configuración, notificaciones ni modo oscuro.

## Detalles técnicos
- Rutas separadas para Inicio, Pago y Éxito, cada una con metadatos propios.
- Tokens semánticos centralizados y controles reutilizables.
- Datos demostrativos locales y flujo manual, sin conexión real a PILA ni procesamiento bancario.
- Validación visual en tamaños móvil y escritorio.
