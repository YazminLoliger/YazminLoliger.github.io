# Portfolio n8n - Proyectos de Automatización

> **Desarrolladora:** Yazmín Löliger  
> **Plataforma:** n8n Cloud  
> **Cliente:** Hoteles y Casinos del Río

---

## Índice de Proyectos

### 1. [Sistema de Monitoreo de Infraestructura](./Monitoreo_Infraestructura_Case_Study.md)
**Workflows activos:** 8  
**Objetivo:** Monitoreo 24/7 del espacio en disco de servidores en todas las sucursales

**Características principales:**
- Monitor diario de espacio en disco
- Alertas automáticas a Slack
- Cobertura de 8 ubicaciones
- Detección proactiva de problemas

**Tecnologías:** n8n, SSH, Linux/Bash, Slack API

---

### 2. [Sistema de Notific ación de Puertos Abiertos](./UptimeRobot_Puertos_Case_Study.md)
**Workflows activos:** 2  
**Objetivo:** Detección y notificación de puertos abiertos para seguridad de infraestructura

**Características principales:**
- Integración con UptimeRobot
- Notificación segmentada (inmediata + 23h)
- Reducción de falsos positivos
- Escalamiento automático

**Tecnologías:** n8n, UptimeRobot, Webhooks, Slack API

---

## Visión General

Todos los workflows están **en producción** y gestionan la infraestructura crítica de Hoteles y Casinos del Río, con un total de **10 workflows activos** automatizando el monitoreo y la seguridad de sistemas.

### Impacto Global
- ✅ 8 sucursales monitoreadas automáticamente
- ✅ Detección proactiva de problemas de infraestructura
- ✅ Notificaciones en tiempo real vía Slack
- ✅ 0 downtime por problemas detectables desde implementación
- ✅ Ahorro de 40+ horas mensuales en verificaciones manuales

---

## Arquitectura General

Todos los workflows siguen un patrón común:

1. **Trigger/Webhook** - Inicio automatizado
2. **Ejecución/Validación** - Obtención y procesamiento de datos
3. **Lógica Condicional** - Evaluación de umbrales
4. **Notificación** - Alerta al equipo si es necesario

---

## Stack Tecnológico

- **n8n Cloud** - Plataforma de automatización
- **Linux/SSH** - Acceso a servidores
- **UptimeRobot** - Monitoreo de servicios
- **Slack API** - Sistema de notificaciones
- **Webhooks** - Comunicación en tiempo real

---

**Fecha de creación:** Octubre-Noviembre 2024  
**Estado:** Todos los workflows en producción  
**Mantenimiento:** Activo
