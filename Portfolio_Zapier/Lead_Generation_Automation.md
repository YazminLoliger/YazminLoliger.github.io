# Automatización de Lead Generation
> *Integración de Facebook Ads con CRM y Notificaciones de Equipo*

## 1. Resumen Ejecutivo
**Cliente:** Proyecto Interno / Demo
**Plataforma:** Zapier
**Rol:** Especialista en Automatización
**Estado:** Activo

---

## 2. El Desafío
**Contexto:**
El equipo de ventas recibía leads de Facebook Ads pero el proceso de contactarlos era manual y lento.
- Los leads se descargaban manualmente en CSV.
- Se perdían horas valiosas antes del primer contacto.
- No había visibilidad inmediata de nuevos prospectos para el equipo.

**Problema:**
La demora en el contacto reducía drásticamente la tasa de conversión. Se necesitaba una solución que conectara las fuentes de datos en tiempo real.

**Objetivo:**
Automatizar la captura, distribución y notificación de leads para asegurar un contacto en menos de 5 minutos.

---

## 3. La Solución
Se implementó un **Zap Multi-step** en Zapier que orquesta todo el flujo de datos sin intervención humana.

### Flujo de Trabajo:
1.  **Trigger:** Nuevo Lead en **Facebook Lead Ads**.
2.  **Validación:** Filtro para asegurar que el lead tenga teléfono y email válidos.
3.  **Base de Datos:** Se agrega una nueva fila en **Google Sheets** (o Airtable) para registro histórico.
4.  **Notificación:** Se envía un mensaje al canal #ventas en **Slack** con los detalles del lead y un botón de acción.
5.  **Email de Bienvenida:** Se dispara un correo automático desde **Gmail** (o Mailchimp) al prospecto confirmando su interés.

### Herramientas Integradas:
- **Facebook Lead Ads** (Captura)
- **Google Sheets** (Almacenamiento)
- **Slack** (Notificación Equipo)
- **Gmail** (Respuesta Automática)

---

## 4. Detalles Técnicos

### Lógica del Zap
El workflow maneja errores comunes como duplicados. Si el email ya existe en la base de datos, el Zap toma un camino alternativo para actualizar el registro existente en lugar de crear uno nuevo (Update Row vs Create Row).

### Formato de Datos
Se utilizan **Formatters** de Zapier para:
- Normalizar el formato del número telefónico (añadir código de país).
- Capitalizar el nombre del prospecto para los correos automáticos.
- Formatear la fecha y hora de recepción.

---

## 5. Resultados
- **Tiempo de respuesta:** Reducido de 4 horas a < 2 minutos.
- **Tasa de Conversión:** Aumento del 25% gracias al contacto inmediato.
- **Eficiencia:** Eliminación total de la carga manual de datos (ahorro de ~5 horas semanales).

---

## 6. Galería
*(Espacio para capturas del flujo en el editor de Zapier)*
