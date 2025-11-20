# Hotel Viedma - Asistente de Hospitalidad
> *Agente Omnicanal para Instagram y Messenger*

## 1. Resumen Ejecutivo
**Cliente:** Hotel del Río - Viedma
**Canales:** Instagram Direct & Facebook Messenger
**Rol:** Desarrollador Botpress
**Estado:** En Producción

---

## 2. El Desafío
**Contexto:**
El Hotel del Río en Viedma recibe un alto volumen de consultas a través de redes sociales, principalmente sobre disponibilidad, tarifas y servicios.

**Problema:**
La gestión manual de mensajes en redes sociales era lenta y dependía de la disponibilidad del Community Manager o recepcionista, perdiendo oportunidades de venta directa.

**Objetivo:**
Capturar la intención de reserva inmediatamente y responder dudas sobre el hotel (ubicación, servicios, restaurante) en los canales donde están los usuarios.

---

## 3. La Solución
Un bot omnicanal conectado a la Meta API a través de Botpress.

### Flujos Clave:
1.  **Consulta de Disponibilidad:** Recolección de fechas y cantidad de huéspedes.
2.  **Información del Hotel:** Respuestas automáticas con fotos de habitaciones, spa y restaurante.
3.  **Ubicación y Contacto:** Envío de mapa y botones de llamada directa.
4.  **Derivación a Recepción:** Opción para hablar con un humano para cerrar reservas complejas.

### Tecnología:
- **Meta Integration:** Configuración nativa para Instagram y Messenger.
- **Rich Media:** Uso de carruseles de imágenes para mostrar las habitaciones.

---

## 4. Detalles Técnicos

### Estructura de Flujos
- **Main**: Flujo principal de conversación y enrutamiento
- **Error**: Manejo de errores y contingencias
- **Timeout**: Gestión de sesiones inactivas
- **Conversation End**: Cierre apropiado de conversaciones

### Bases de Conocimiento (Knowledge Bases)
El bot utiliza múltiples Knowledge Bases para respuestas contextuales:
-   **Info general**: Información estándar sobre el hotel (horarios, servicios, políticas)
-   **Página**: Contenido extraído desde la web oficial del hotel
-   **Rich Text File**: Documentos con información detallada sobre habitaciones, tarifas y promociones

### Canales de Comunicación
-   **Webchat**: Widget de chat embebido en el sitio web
-   **Messenger**: Integración nativa con Facebook Messenger
-   **Instagram**: Conexión directa con Instagram Direct Messages

### Herramientas
-   **Int_Improvement_Feedback_Table**: Sistema de retroalimentación para capturar sugerencias y mejorar el servicio continuamente.

---

## 5. Resultados
- Aumento en la tasa de respuesta rápida en redes sociales.
- Mejora en la imagen de marca al ofrecer atención instantánea.
- Captura automática de leads para el equipo de ventas.

---

## 6. Galería
*(Espacio para capturas del emulador funcionando en Instagram/Messenger)*
