# Institucional - Navegador Corporativo
> *Agente Web para Hoteles y Casinos del Río*

## 1. Resumen Ejecutivo
**Cliente:** Grupo Hoteles y Casinos del Río
**Plataforma:** Web Principal
**Rol:** Desarrollador Botpress
**Estado:** En Producción

---

## 2. El Desafío
**Contexto:**
El grupo empresarial posee múltiples unidades de negocio: varios hoteles, casinos físicos en distintas ciudades y el casino online.

**Problema:**
Los visitantes del sitio web principal a menudo se pierden o confunden las sucursales (ej. buscando el teléfono de Cipolletti pero llamando a Viedma).

**Objetivo:**
Actuar como un "Conserje Digital" que entienda qué busca el usuario y lo dirija a la unidad de negocio correcta o le brinde la información institucional precisa.

---

## 3. La Solución
Un agente enrutador inteligente en la home page.

### Flujos Clave:
1.  **Selector de Sucursal:** Menú interactivo o detección por NLU para identificar la ciudad de interés.
2.  **Información Corporativa:** Misión, visión, RRHH (trabaja con nosotros).
3.  **Eventos y Shows:** Información sobre espectáculos en los distintos casinos.
4.  **Redirección Inteligente:** Links directos a las webs específicas de cada hotel o a Betsur.

### Tecnología:
- **Árbol de Decisión:** Estructura clara para segmentar el tráfico.
- **Knowledge Base:** Información estática sobre la empresa.

---

## 4. Detalles Técnicos

### Arquitectura del Bot
El bot "Institucional" actúa como un **enrutador inteligente** que:
- Detecta la intención del usuario mediante procesamiento de lenguaje natural
- Dirige al usuario a la unidad de negocio correcta según su consulta
- Proporciona información corporativa general de manera eficiente

### Bases de Conocimiento (Knowledge Base)
Utiliza una Knowledge Base centralizada con información sobre:
- Historia y misión corporativa de "Hoteles y Casinos del Río"
- Listado de todas las sucursales (Cipolletti, Viedma, General Roca, Las Grutas, Catriel, Choele Choel, Villa Regina)
- Eventos y espectáculos en cada casino
- Información de contacto específica por ubicación

### Canales de Despliegue
-   **Webchat**: Widget integrado en el sitio web institucional principal

### Herramientas
-   **Int_Improvement_Feedback_Table**: Captura de feedback para mejorar la experiencia corporativa

---

## 5. Resultados
- Mejor navegación del usuario en el sitio corporativo.
- Reducción de llamadas equivocadas entre sucursales.
- Información institucional disponible 24/7.

---

## 6. Galería
*(Espacio para capturas del widget funcionando en la web institucional)*
