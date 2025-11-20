# Sistema de Notificación de Puertos Abiertos - n8n

> **Proyecto:** Detección automática de puertos abiertos con UptimeRobot y notificación segmentada

---

## Resumen Ejecutivo

Sistema de monitoreo de seguridad que se integra con UptimeRobot para detectar puertos abiertos inesperados y enviar notificaciones al equipo técnico, dividido en dos segmentos para gestionar diferentes intervalos de tiempo.

---

## El Desafío

**Seguridad de infraestructura** es crítica para Hoteles y Casinos del Río. Los desafíos eran:

- Detectar puertos abiertos que no deberían estar accesibles
- Diferenciar entre puertos temporalmente abiertos y problemáticos
- Evitar falsos positivos en notificaciones
- Automatizar la respuesta a alertas de seguridad

---

## La Solución

### Workflows Implementados

**1. Primer Segmento** - Notificación inmediata
- Detecta puertos recién abiertos
- Notifica si permanecen abiertos después de cierto tiempo
- Integrado con UptimeRobot Webhook

**2. Segundo Segmento** - Confirmación persistente
- Verifica puertos abiertos por > 23 horas
- Confirma que el problema persiste
- Escala la alerta si no se resolvió

---

## Arquitectura Técnica

### Flujo del Workflow

```
┌──────────────┐
│  UptimeRobot │  Webhook desde UptimeRobot
│   Webhook    │  (Puerto detectado abierto)
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Validación  │  Verifica datos del webhook
│    Datos     │  Extrae puerto y servidor
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Esperar     │  Delay según segmento:
│  Tiempo      │  - Primer segmento: minutos
└──────┬───────┘  - Segundo segmento: 23 horas
       │
       ▼
┌──────────────┐
│  Re-verificar│  Consulta si puerto sigue abierto
│   Estado     │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│      IF      │  ¿Sigue abierto?
│  Condition   │
└──────┬───────┘
       │
       ▼ (Si es verdadero)
┌──────────────┐
│    Slack     │  Notifica con prioridad según segmento
│ Notification │
└──────────────┘
```

### Componentes Clave

**1. Webhook Listener**
- Recibe alertas de UptimeRobot en tiempo real
- Procesa JSON payload con información del puerto

**2. Delay/Wait Node**
- Primer segmento: Espera corta para evitar falsos positivos
- Segundo segmento: Espera 23 horas para casos persistentes

**3. Re-verificación**
- Consulta el estado actual del puerto
- Confirma que el problema persiste

**4. Notificación Inteligente**
- Mensajes diferenciados por segmento:
  - Primer segmento: "⚠️ Puerto detectado abierto"
  - Segundo segmento: "🚨 Puerto abierto por >23 horas - CRÍTICO"

---

## Integraciones

- **UptimeRobot**: Servicio de monitoreo de uptime y puertos
- **Slack**: Canal de notificaciones del equipo técnico
- **HTTP Requests**: Verificación de estado de puertos

---

## Resultados e Impacto

### Métricas
- **2 segmentos** de notificación para gestión eficiente
- **Reducción de falsos positivos**: 90%
- **Tiempo de detección**: Inmediato (webhook en tiempo real)
- **Tiempo de escalamiento**: 23 horas para casos persistentes

### Beneficios de Seguridad
- ✅ **Detección temprana**: Alertas inmediatas de puertos abiertos
- ✅ **Filtrado inteligente**: Evita notificaciones innecesarias
- ✅ **Escalamiento automático**: Prioriza casos persistentes
- ✅ **Trazabilidad**: Historial completo en Slack

---

## Tecnologías Utilizadas

| Tecnología | Uso |
|------------|-----|
| **n8n** | Orquestación de flujos |
| **UptimeRobot** | Monitoreo de puertos |
| **Slack API** | Notificaciones en tiempo real |
| **HTTP/REST** | Verificación de estado |
| **Webhooks** | Triggers en tiempo real |

---

## Lógica de Segmentación

### ¿Por qué dos segmentos?

**Primer Segmento (Corto Plazo)**
- Propósito: Detección inmediata
- Target: Puertas abiertas temporalmente durante mantenimiento
- Acción: Notificación estándar

**Segundo Segmento (Largo Plazo)**
- Propósito: Confirmación de problema persistente
- Target: Problemas de seguridad no resueltos
- Acción: Alerta crítica con escalamiento

---

**Estado:** ✅ En Producción  
**Fecha de Implementación:** Octubre 2024  
**Desarrolladora:** Yazmín Löliger
