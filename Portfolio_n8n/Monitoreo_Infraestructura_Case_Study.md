# Sistema de Monitoreo de Infraestructura - n8n

> **Proyecto:** Monitoreo automático de espacio en disco para 8 sucursales de Hoteles y Casinos del Río

---

## Resumen Ejecutivo

Sistema de monitoreo distribuido desarrollado en n8n que supervisa el espacio en disco de servidores en 8 ubicaciones diferentes, enviando alertas automáticas a Slack cuando se detectan niveles críticos de uso.

---

## El Desafío

**Hoteles y Casinos del Río** opera 8 sucursales distribuidas geográficamente, cada una con su propia infraestructura de servidores. El desafío era:

- Monitorear proactivamente el espacio en disco de cada servidor
- Detectar problemas antes de que afecten la operación
- Notificar al equipo técnico de forma inmediata
- Mantener un sistema centralizado y escalable

---

## La Solución

### Workflows Implementados (8 activos)

Cada sucursal cuenta con su propio workflow de monitoreo:

1. **GW El Faro** - Monitoreo diario de espacio en disco
2. **GW Cipolletti** - Monitoreo diario de espacio en disco
3. **GW General Roca** - Monitoreo diario de espacio en disco
4. **GW Villa Regina** - Monitoreo diario de espacio en disco
5. **GW Choele Choel** - Monitoreo diario de espacio en disco
6. **GW Las Grutas** - Monitoreo diario de espacio en disco
7. **GW Viedma** - Monitoreo diario de espacio en disco
8. **GW Administración Central** - Monitoreo diario de espacio en disco

---

## Arquitectura Técnica

### Flujo del Workflow (Ejemplo: GW Villa Regina)

```
┌──────────────┐
│  Schedule    │  Trigger diario (cada 24 horas)
│  Trigger     │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Execute    │  Comando: df -h
│   Command    │  (Disk Free - Human readable)
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Procesamiento│  Analiza output del comando
│ Particiones  │  Extrae % de uso de cada partición
└──────┬───────┘
       │
       ▼
┌──────────────┐
│      IF      │  ¿Uso > 80%?
│  Condition   │
└──────┬───────┘
       │
       ▼ (Si es verdadero)
┌──────────────┐
│    Slack     │  Notifica al equipo técnico
│   Webhook    │  con detalles del servidor
└──────────────┘
```

### Componentes Clave

**1. Schedule Trigger**
- Frecuencia: Cada 24 horas
- Horario: Definido para cada sucursal

**2. Execute Command (SSH)**
- Comando: `df -h`
- Conexión: SSH a servidor remoto
- Credenciales: Almacenadas en n8n Credentials Manager

**3. Procesamiento de Datos**
- Parseo de output del comando `df -h`
- Extracción de porcentajes de uso
- Identificación de particiones críticas

**4. Lógica Condicional**
- Umbral: 80% de uso
- Evalúa todas las particiones
- Filtra solo las que superan el límite

**5. Notificación Slack**
- Webhook configurado por sucursal
- Mensaje personalizado con:
  - Nombre de la sucursal
  - Partición afectada
  - Porcentaje de uso
  - Timestamp

---

## Integraciones

- **SSH/Command Line**: Ejecución remota de comandos en servidores Linux
- **Slack**: Sistema de notificaciones en tiempo real
- **n8n Schedule Trigger**: Automatización temporal

---

## Resultados e Impacto

### Métricas
- **8 sucursales** monitoreadas 24/7
- **Verificaciones diarias** automáticas
- **Tiempo de respuesta**: < 5 minutos desde detección hasta notificación
- **0 downtime** por falta de espacio desde implementación

### Beneficios Operacionales
- ✅ **Proactividad**: Detección de problemas antes de afectar servicios
- ✅ **Centralización**: Un solo sistema para toda la infraestructura
- ✅ **Escalabilidad**: Fácil agregar nuevas sucursales
- ✅ **Trazabilidad**: Historial de alertas en Slack
- ✅ **Ahorro de tiempo**: Eliminación de verificaciones manuales

---

## Tecnologías Utilizadas

| Tecnología | Uso |
|------------|-----|
| **n8n** | Plataforma de automatización |
| **Linux/SSH** | Acceso a servidores remotos |
| **Bash** | Comandos de sistema (df) |
| **Slack API** | Sistema de notificaciones |
| **Cron/Schedule** | Triggers temporales |

---

## Mantenimiento

### Frecuencia de Monitoreo
- Actualmente: 1 vez por día
- Fácilmente ajustable a mayor frecuencia si se requiere

### Extensibilidad
El sistema está diseñado para ser escalable:
- Agregar nuevas sucursales: < 10 minutos
- Modificar umbrales: Configuración simple
- Cambiar canales de notificación: Modular

---

## Capturas

*(Espacio reservado para capturas del workflow en acción)*

![Workflow GW Villa Regina](file:///home/yloliger/.gemini/antigravity/brain/f0d855ec-cc96-4c8c-8d2e-fa6ee1ae96c6/n8n_villa_regina_workflow_1763665313528.png)

---

**Estado:** ✅ En Producción  
**Fecha de Implementación:** Octubre 2024  
**Desarrolladora:** Yazmín L\u00f6liger
