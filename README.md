# Pensión Sin Barreras

Actúa como un diseñador senior experto en desarrollo de aplicaciones web en Colombia, especializado en plataformas financieras y tecnología para trámites (GovTech/FinTech).

Crea una aplicación web llamada "Pensión Global" para ciudadanos colombianos en el exterior y trabajadores independientes que necesitan pagar su pensión en Colombia de forma rápida, sin depender de familiares y sin trámites presenciales.

Función central: consultar el valor exacto a pagar del mes actual (conectado a la PILA) y realizar el pago manual fácilmente, teniendo acceso rápido al historial de recibos generados.

Pantallas (solo estas 3):

Inicio (Dashboard): un saludo al usuario y el estado del mes actual en grande y muy visible (ej: "Planilla de Septiembre: Pendiente"). Si está pendiente, mostrar el monto total consultado y un botón principal llamativo "Pagar mes actual". En la mitad inferior, una lista simple del "Historial de Recibos" (mes, año, valor) con un icono para ver/descargar el PDF.

Pantalla de Pago (Checkout): un resumen muy claro con el desglose del cobro (Aporte PILA + Comisión por el servicio). Opciones de pago tipo botones grandes: Tarjeta de Crédito/Débito, PSE y Apple Pay. Un botón inferior muy claro de "Confirmar Pago".

Éxito y Recibo: pantalla de confirmación con un check verde grande, mensaje de transacción exitosa, número de referencia, y dos botones: "Descargar soporte en PDF" y "Volver al inicio".

Estilo: limpio, institucional y que transmita mucha confianza y seguridad (es una app financiera), colores azul marino, blanco y toques de verde para el éxito, letras grandes y legibles, mobile-first — aunque sea web, la mayoría entrará desde el navegador de su celular para hacer el trámite rápido.

Todos los textos en español colombiano. Usa datos de ejemplo realistas: usuario "Enmanuel Velasquez Romero", aportes en pesos colombianos como "$350.000", una comisión de "$20.000", referencias a fondos reales como "Colpensiones" o "Porvenir", y fechas recientes como "Septiembre 2026".

NO incluyas: login o registro (asume que ya inició sesión), pagos automáticos o suscripciones, gráficas de historial, configuraciones complejas, notificaciones, ni modo oscuro. Eso viene después.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/414f9a90-f10f-448f-bc50-69a323eb9ce5).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
