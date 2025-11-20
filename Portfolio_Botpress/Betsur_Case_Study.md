# Betsur - Agente de Casino Online
> *Asistente Virtual Especializado para Plataforma de Juego Online*

## 1. Resumen Ejecutivo
**Cliente:** Betsur (Unidad de Negocio de Hoteles y Casinos del Río)
**Plataforma:** Web (Widget de Chat)
**Rol:** Desarrollador Botpress
**Estado:** En Producción

---

## 2. El Desafío
**Contexto:**
Betsur es la plataforma de casino online de la cadena. Los usuarios frecuentemente tienen dudas sobre:
- Cómo registrarse o recuperar contraseñas.
- Métodos de carga y retiro de saldo (Cajero, Transferencia).
- Reglas de juegos específicos.
- Promociones vigentes.

**Problema:**
El soporte humano estaba saturado con preguntas repetitivas de nivel 1, lo que aumentaba el tiempo de espera para problemas técnicos reales.

**Objetivo:**
Automatizar la atención al cliente para consultas frecuentes y guiar al usuario en el proceso de registro y juego responsable.

---

## 3. La Solución
Se implementó un agente en **Botpress** diseñado para retener al usuario y resolver dudas al instante.

### Flujos Clave:
1.  **Onboarding de Usuarios:** Guía paso a paso para el registro y validación de identidad.
2.  **Gestión de Saldo:** Explicación interactiva de cómo cargar créditos y retirar premios.
3.  **Soporte de Juegos:** Base de conocimiento con reglas y tips para Slots, Ruleta y Blackjack.
4.  **Juego Responsable:** Detección de palabras clave para ofrecer ayuda y límites de juego.

### Tecnología:
- **NLU Personalizado:** Entrenado para reconocer terminología de casino ("free spins", "rollover", "cashout").
- **Integración Web:** Widget personalizado con los colores de la marca (Negro y Dorado).

---

## 4. Detalles Técnicos

### Estructura de Flujos
El bot cuenta con flujos bien estructurados:
- **Main**: Flujo principal de bienvenida y enrutamiento de consultas
- **Contacto**: Captación de información del usuario y gestión de soporte técnico

### Herramientas Personalizadas (Tools)
-   **Extract Content from Image**: Capacidad de extraer y procesar texto de imágenes enviadas por los usuarios (útil para validar DNI o documentos).
-   **Contacto**: Sistema de gestión de información de contacto del usuario.
-   **Int_Improvement_Feedback_Table**: Integración para recolectar feedback y mejoras sugeridas, almacenándolo en una tabla/base de datos.

### Tecnología NLU
Entrenado con intenciones específicas del dominio de casinos online para reconocer consultas sobre:
- Procesos de registro y verificación
- Gestión de saldo y métodos de pago
- Reglas de juegos específicos
- Promociones y bonificaciones

---

## 5. Resultados
- Atención inmediata 24/7 para jugadores nocturnos.
- Reducción de consultas básicas al equipo de soporte.
- Procesamiento inteligente de documentos de identificación mediante OCR.

---

## 6. Galería
*(Espacio reservado para capturas del emulador y flujos)*
