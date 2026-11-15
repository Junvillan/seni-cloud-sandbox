# Gates: Movimiento Delta de Elevación (`v_docente` UPV)

**Rama:** `feat/presentaciones-v_docente-20261114`  
**Alcance Fase 1:** Solo propuestas de elevación física/visual y beneficio institucional UPV. **Cero edición de `index.html` o scripts de verificación en esta fase.**

## Titularidad Estricta por Agente (`OWNS:`)
- **Grok (Cursor):** `presentaciones_oficiales/seni_ia/v_docente/propuestas_elevacion/PROPUESTA_ELEVACION_GROK.md`
- **GLM Cloud:** `presentaciones_oficiales/seni_ia/v_docente/propuestas_elevacion/PROPUESTA_ELEVACION_GLM.md`
- **MiniMax (MVIS):** `presentaciones_oficiales/seni_ia/v_docente/propuestas_elevacion/PROPUESTA_ELEVACION_MINIMAX.md`

---

## Compuertas de Aceptación (Fase 1)

- [ ] **G1 — Aislamiento de Archivos (`git status` limpio en `index.html`):**
  Ningún agente modificó `index.html`, `verificar_portal.mjs` ni `verificar_navegador_final.mjs`.
- [ ] **G2 — Estructura Canónica de 5 Bloques:**
  Cada propuesta contiene exactamente las secciones `Bloque A` (Física Tangible), `Bloque B` (Activos Eléctricos Reales), `Bloque C` (Vender sin Decirlo / Beneficio UPV), `Bloque D` (Doble Muralla) y `Bloque E` (Plan y Presupuesto Técnico).
- [ ] **G3 — Doble Muralla (`R11-10`):**
  Zero códigos internos (`M00`..`M38`), zero código C++/kernels propietarios, zero texto de las 20 reivindicaciones de patente y zero telemetría cruda privada.
- [ ] **G4 — Activos 100% Offline y Verificables:**
  Todo activo visual propuesto referencia herramientas/rutas reales del repositorio (`mcp_blender`, `OpenCADStudio`, `schemdraw`, `GridCal`, `documentacion_cientifica_original/`) y es embebible offline bajo `default-src 'none'`.
- [ ] **G5 — Cero `git push` (`R11-11`):**
  Ningún agente ejecuta `git push`.
