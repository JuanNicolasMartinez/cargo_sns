# Modelo de negocio — CargoSnS

CargoSnS es una plataforma **web/mobile** tipo marketplace que conecta **tres lados**:
1) Personas/empresas que **necesitan almacenar** mercancía.  
2) Personas/empresas que **tienen espacio disponible** para almacenar.  
3) **Transportistas** (independientes o empresas) que buscan **rutas y cargas**.

---

## 1) Problema que resuelve

### Demanda (quien necesita almacenamiento)
- Falta de espacio propio o picos de inventario.
- Dificultad para encontrar opciones **seguras**, cercanas y con **precio claro**.
- Necesidad de **flexibilidad** (días/semanas/meses) y confianza.

### Oferta (quien tiene espacio disponible)
- Metros cúbicos o posiciones de bodega subutilizadas.
- Quiere monetizar sin montar un equipo comercial ni operación compleja.

### Transporte
- Tiempos muertos, baja ocupación y dificultad para conseguir cargas/rutas recurrentes.

---

## 2) Propuesta de valor

**“Encuentra y reserva bodegas confiables + coordina transporte en un solo lugar, con trazabilidad, reputación y pagos protegidos.”**

**Diferenciadores**
- Verificación + reputación + evidencia (fotos/actas).
- Reserva/pago digital (con opción de **escrow** por hitos).
- Flexibilidad de cobro: por m³, pallet, posición, día/mes.
- Integración almacenamiento + transporte (end-to-end).

---

## 3) Segmentos de clientes (foco inicial)

### Demanda (pagadores)
1. **E-commerce y comercios** con picos de inventario.  
2. **PyMEs** (importadores/distribuidores/retail).  
3. Proyectos temporales (eventos, ferias, obras livianas).

### Oferta (proveedores de espacio)
1. **Bodegas formales / mini-bodegas** (rápido onboarding).  
2. Empresas con espacio ocioso (zonas industriales).  
3. Espacios pequeños (con reglas claras y mercancía permitida).

### Transporte
- Transportista independiente (vans/camión mediano).
- Flotas para rutas recurrentes.

> Recomendación: arrancar con **almacenamiento** como core y transporte como **add-on** (para reducir complejidad).

---

## 4) Producto

### MVP (para vender rápido)
**Almacenamiento**
- Publicación de espacios (ubicación, capacidad, tipo, restricciones, precio).
- Búsqueda + filtros (zona, seguridad, horarios, precio).
- Reserva + pagos.
- Acta de recepción (checklist + fotos).
- Chat y soporte.

**Transporte (MVP simple)**
- Publicar carga/ruta.
- Postulación/aceptación.
- Evidencia de recogida/entrega (foto + firma).

### V1 (para escalar)
- Inventario liviano (entradas/salidas, etiquetas, fotos por lote).
- Escrow por hitos (recibido/entregado).
- Seguro opcional.
- SLA, penalidades y resolución de disputas.
- Pricing sugerido + analítica para proveedores.

---

## 5) Modelo de ingresos

### A) Comisión por transacción (take rate)
- **Almacenamiento:** 10%–18% del arriendo.
- **Transporte:** 5%–12% del flete.

### B) Suscripción (B2B)
- **Bodegas Pro:** posicionamiento, leads, multi-sede, usuarios, analítica.
- **Transportista Pro:** acceso a cargas premium, priorización, rutas recurrentes.

### C) Servicios de valor agregado (alto margen)
- Seguro (fee/markup).
- Embalaje, etiquetado, picking (con aliados).
- Inspección/auditoría/inventario asistido.
- (Futuro) adelantos/financiación con aliado financiero.

---

## 6) Business Model Canvas (resumen)

- **Propuesta de valor:** almacenamiento confiable + transporte coordinado, con trazabilidad y pagos protegidos.  
- **Segmentos:** demanda (comerciantes/PyMEs), oferta (bodegas/espacios), transportistas/flotas.  
- **Canales:** app/web, alianzas con bodegas, asociaciones, pauta local, referrals.  
- **Relación:** autoservicio + soporte, onboarding guiado, reputación.  
- **Ingresos:** comisiones, suscripciones, seguros y servicios extra.  
- **Recursos clave:** plataforma, motor de matching, sistema de reputación/verificación, equipo ops.  
- **Actividades clave:** captación de oferta, activación de demanda, verificación, pagos, soporte, disputas.  
- **Socios clave:** pasarela de pagos, aseguradoras, aliados logísticos, bodegas ancla, seguridad.  
- **Costos:** desarrollo/infra, marketing, soporte/ops, verificación, fees de pagos, legal.

---

## 7) Confianza y seguridad (crítico en marketplace)

- **KYC básico** (persona/empresa).
- **Verificación de bodegas** (dirección, fotos, checklist de seguridad).
- **Reputación** por transacción (puntualidad, daños, cumplimiento).
- **Pagos protegidos** (escrow opcional y liberación por hitos).
- **Políticas claras**: mercancías prohibidas, responsabilidad, daños, cancelaciones.

---

## 8) Go-to-market (evitar el cold start)

1. **Oferta primero (2–4 semanas):** 20–50 espacios en una zona/ciudad + 2–3 bodegas ancla.  
2. **Activación demanda (4–8 semanas):** e-commerce y PyMEs; promo de arranque (ej: 1er mes sin comisión).  
3. **Transporte add-on:** primeras rutas simples (bodega ↔ cliente) y transportistas por referidos.

---

## 9) Métricas (KPIs)

**Marketplace**
- GMV (valor transado) y take rate efectivo.
- Conversión búsqueda → reserva.
- Tiempo promedio de cierre (lead time).
- Retención (repetición mensual) y churn.

**Operación**
- Incidentes por 100 órdenes (daños, retrasos, reclamos).
- Tiempo de resolución y NPS.

**Oferta**
- Ocupación promedio por proveedor.
- % espacios activos (disponibilidad real vs publicada).

---

## 10) Riesgos y mitigaciones

- **Daños/robos:** seguro + evidencia + verificación + SLA + escrow.
- **Calidad heterogénea:** estándares mínimos + sellos (Verificado/Premium).
- **Fraude:** KYC, reputación, alertas y pagos protegidos.
- **Legal/operación:** empezar con mercancía permitida y contratos digitales simples.

---

## 11) Ventaja competitiva (defensibilidad)

- **Datos + reputación** (historial de cumplimiento).
- **Efectos de red** (más oferta → más demanda → más liquidez).
- **Flujo end-to-end** (almacenamiento + transporte + trazabilidad).
- **Alianzas ancla** (proveedores premium y rutas recurrentes). 
