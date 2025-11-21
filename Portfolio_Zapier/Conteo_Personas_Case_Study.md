# Conteo de Personas - Automatización de Archivos
> *Gestión Automatizada de Reportes de Cámaras de Seguridad*

## 1. Resumen Ejecutivo
**Cliente:** Seguridad - Casino del Río Viedma
**Plataforma:** Zapier
**Rol:** Especialista en Automatización
**Estado:** Activo

---

## 2. El Desafío
**Contexto:**
El sistema de cámaras de seguridad genera reportes automáticos de conteo de personas que llegan por correo electrónico. Estos archivos adjuntos debían ser descargados y organizados manualmente en carpetas específicas de Google Drive para su análisis posterior.

**Problema:**
- Proceso manual tedioso y propenso a errores u olvidos.
- Dificultad para mantener la información actualizada en tiempo real para la toma de decisiones.
- Bandeja de entrada saturada con correos de reportes.

**Objetivo:**
Automatizar la extracción y almacenamiento de los archivos adjuntos de los reportes de conteo de personas directamente en la nube.

---

## 3. La Solución
Se creó un Zap que monitorea la bandeja de entrada, filtra los correos relevantes y guarda automáticamente los archivos en Google Drive.

### Flujo de Trabajo:
1.  **Trigger (Disparador):** Nuevo correo electrónico recibido en **Gmail** que coincide con una búsqueda específica (ej. "Subject: Reporte Conteo").
2.  **Filtro:** **Filter by Zapier** verifica condiciones adicionales para asegurar que el correo contiene los datos correctos y evitar falsos positivos.
3.  **Acción:** Se extrae el archivo adjunto y se sube a una carpeta específica en **Google Drive**, organizando los reportes automáticamente.

### Herramientas Integradas:
- **Gmail** (Recepción de Reportes)
- **Filter by Zapier** (Lógica Condicional)
- **Google Drive** (Almacenamiento Cloud)

---

## 4. Detalles Técnicos

### Filtrado Inteligente
El uso de "New Email Matching Search" combinado con un paso de "Filter" asegura que solo se procesen los correos que realmente contienen los reportes de conteo, ignorando otros correos del sistema o spam, garantizando la integridad de los datos almacenados.

---

## 5. Resultados
- **Organización:** Archivos guardados y organizados automáticamente sin intervención humana.
- **Disponibilidad:** Reportes disponibles en Drive segundos después de ser generados.
- **Limpieza:** Reducción del ruido en la bandeja de entrada operativa.

---

## 6. Galería
![Workflow en Zapier](../zap_conteo_workflow_1763729183363.png)
