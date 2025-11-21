# Integración Botpress - Freshdesk
> *Automatización de Soporte: Del Chatbot al Ticket de Mesa de Ayuda*

## 1. Resumen Ejecutivo
**Cliente:** Emprendimientos Crown S.A.
**Plataforma:** Zapier + Botpress + Freshdesk
**Rol:** Especialista en Automatización
**Estado:** Activo

---

## 2. El Desafío
**Contexto:**
Los chatbots de **Betsur** y **Institucional** (Botpress) atienden consultas de primer nivel. Sin embargo, cuando un usuario requiere atención humana o reporta un problema complejo, la transición hacia el equipo de soporte no estaba automatizada.

**Problema:**
- Pérdida de información en el traspaso del bot al humano.
- Necesidad de que el usuario repita su problema.
- Falta de seguimiento estructurado de los casos derivados por el bot.

**Objetivo:**
Crear un módulo de soporte unificado que intercepte el flujo de "Contacto" de ambos bots y genere un ticket formal en el sistema de Freshdesk, asegurando que ninguna solicitud de ayuda se pierda.

---

## 3. La Solución
Se implementó un Zap que escucha un **Webhook** disparado por Botpress cuando el flujo llega a la instancia de "Contacto" y crea automáticamente un ticket en **Freshdesk**.

### Flujo de Trabajo:
1.  **Trigger (Disparador):** **Webhooks by Zapier (Catch Hook)**. Cuando el usuario llega al nodo "Contacto" en **Betsur** o el bot **Institucional**, Botpress envía una señal HTTP POST con los datos de la charla.
2.  **Acción:** **Freshdesk (Create Ticket)**. Zapier procesa el payload (nombre, email, motivo, resumen) y crea el ticket en la mesa de ayuda correspondiente.

### Herramientas Integradas:
- **Botpress** (Origen de la interacción)
- **Webhooks by Zapier** (Receptor de datos)
- **Freshdesk** (Gestión de Tickets)

---

## 4. Detalles Técnicos

### Webhook Payload
La clave de esta integración es la configuración del nodo de Botpress para enviar un JSON estructurado con:
- `user_email`: Para asociar el ticket al cliente.
- `conversation_summary`: Un resumen o el último mensaje del usuario.
- `category`: La categoría del problema detectada por el bot.

Esto asegura que el agente de soporte reciba un ticket completo y clasificado, listo para ser resuelto.

---

## 5. Resultados
- **Continuidad:** Experiencia fluida para el usuario, sin fricción entre el chat y el soporte humano.
- **Trazabilidad:** 100% de las derivaciones quedan registradas como tickets.
- **Eficiencia:** Los agentes reciben el contexto completo, reduciendo el tiempo de resolución.

---

## 6. Galería
![Workflow en Zapier](../freshdesk_workflow_1763733255692.png)
