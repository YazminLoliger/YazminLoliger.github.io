# Bot de Reseñas - Casino del Río Viedma
> *Automatización de Respuestas a Reseñas de Google con IA*

## 1. Resumen Ejecutivo
**Cliente:** Casino del Río Viedma
**Plataforma:** Zapier + OpenAI
**Rol:** Especialista en Automatización
**Estado:** Activo

---

## 2. El Desafío
**Contexto:**
El Casino del Río Viedma recibe numerosas reseñas en su perfil de Google Business diariamente. Responder a cada una de manera personalizada y oportuna es crucial para la reputación online, pero consume mucho tiempo del equipo de marketing.

**Problema:**
- Demora en las respuestas a los clientes.
- Respuestas genéricas o repetitivas.
- Falta de registro centralizado de las interacciones.

**Objetivo:**
Automatizar la generación y publicación de respuestas a reseñas utilizando Inteligencia Artificial para asegurar una atención rápida y personalizada, manteniendo un registro detallado.

---

## 3. La Solución
Se implementó un flujo automatizado en **Zapier** que conecta Google Business Profile con ChatGPT para redactar respuestas inteligentes y publicarlas automáticamente.

### Flujo de Trabajo:
1.  **Trigger (Disparador):** Nueva reseña recibida en **Google Business Profile**.
2.  **Registro Inicial:** Se guarda la reseña original y los datos del cliente en **Google Sheets** para auditoría.
3.  **Generación de Respuesta:** Se envía el texto de la reseña a **ChatGPT (OpenAI)** con un prompt específico para generar una respuesta cordial, profesional y acorde al tono de la marca.
4.  **Registro de Respuesta:** Se guarda la respuesta generada en **Google Sheets** junto con la reseña original.
5.  **Publicación:** Se publica automáticamente la respuesta generada en **Google Business Profile**.

### Herramientas Integradas:
- **Google Business Profile** (Gestión de Reputación)
- **ChatGPT (OpenAI)** (Generación de Texto IA)
- **Google Sheets** (Base de Datos / Registro)

---

## 4. Detalles Técnicos

### Prompt Engineering
El prompt enviado a ChatGPT está diseñado para:
- Agradecer siempre al cliente.
- Abordar puntos específicos mencionados en la reseña (positivos o negativos).
- Invitar al cliente a volver.
- Mantener un tono formal pero cercano ("Usted").

### Manejo de Datos
El uso de Google Sheets como paso intermedio permite al equipo de marketing revisar el historial de interacciones y ajustar el prompt si es necesario, asegurando una mejora continua en la calidad de las respuestas.

---

## 5. Resultados
- **Tiempo de respuesta:** Inmediato (24/7).
- **Personalización:** Cada respuesta es única y relevante al comentario del usuario.
- **Eficiencia:** Reducción del 100% en la carga operativa de responder reseñas manualmente.

---

## 6. Galería
![Workflow en Zapier](../zap_viedma_workflow_1763729019426.png)
