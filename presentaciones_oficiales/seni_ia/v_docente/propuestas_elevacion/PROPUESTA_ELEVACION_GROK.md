# Propuesta de elevación visual — portal docente UPV

**Documento:** `PROPUESTA_ELEVACION_GROK.md`  
**Fase:** 1, solo propuesta  
**Destinatarios:** Dr. Manuel Alcázar Ortega y Vicerrectorado, Universitat Politècnica de València  
**Rama de referencia:** `feat/presentaciones-v_docente-20261114`  
**Fecha:** 15 de noviembre de 2026

La elevación no añade un discurso. Hace visible la física que el portal ya sostiene, con la precisión de un monitor de referencia y la gramática de una secuencia de títulos: campo de obsidiana, filetes de acero, una costura de cobre y un solo ámbar. La Universitat Politècnica de València puede deducir el alcance industrial y de Estado a partir de subestaciones, fasores y fronteras. Este archivo no modifica el portal.

---

## Bloque A — Física Tangible

La escena cabe en 1280×800. El negro es el fondo de trabajo, no un efecto. La paleta tiene tres materias: acero para la geometría, cobre para lo que cruza una frontera, ámbar para el calor. Hay un solo elemento en movimiento, y ese movimiento ya vive en el canvas orbital del portal. Los activos nuevos son quietos, para que el ojo lea cotas y no persecuciones.

Cinco magnitudes pasan de cifra a objeto.

**Estrés térmico.** El autotransformador de 300 MVA del corredor Julio Sauri se entiende como cuba, aceite y bushings. La pérdida I²R calienta el metal. El ámbar aparece en la superficie de la cuba y en el pasatapas, con caída suave hacia el acero frío del patio. La planta ortográfica de la bahía permanece sin color térmico: el calor tiene un solo lugar, el corte. Quien mira el corte entiende por qué una adecuación de bahía y una reconducción cambian el ratio de coste del ensayo CIGRE 244, de 10,09× a 1,18×.

**Colapso Q–V.** El lazo metropolitano de 138 kV —Palamara, Haina, Arroyo Hondo— se dibuja como una membrana sobre la nariz de la curva. Al agotarse el margen de reactiva, la membrana cede hacia el pliegue. La lectura es la del modelo que el portal ya declara en ese foco: vigilancia Q–V del caso, con el alcance publicado en la ficha del nodo. La nariz comparte lámina con los cuatro cuadrantes, para que la sensibilidad de tensión y la forma de la curva se vean juntas.

**σ_min(J).** El menor valor singular es el montante más delgado de la celosía de la Jacobiana. El trazo de ese montante adelgaza con σ_min(J). Cuando el montante pierde sección, la estructura pierde rigidez: es la proximidad a la singularidad leída como pieza, en la misma lámina donde ya se eligen los cuadrantes H, N, M y L. El portal publica esa Jacobiana en formulación polar sobre IEEE-14, con máscaras 13×13, 13×9, 9×13 y 9×9.

**Δκ = 0,00 %.** Dos filetes espectrales, el del cálculo físico y el del validador SVD independiente, coinciden. Un monitor de referencia sirve aquí para una sola demostración: la diferencia resuelta es nula. La cifra conserva el alcance de la ficha pública: concordancia entre validadores. La condición κ₂(J) y los modos críticos quedan como instrumentos para estudiar la cercanía a la singularidad, junto con el contraste de preservación del espacio nulo que el portal ya separa como evidencia adicional.

**Schur y diakóptica.** Cuatro placas de acero y una costura de cobre. Por la costura solo cruzan los fasores de frontera. La relación que la costura materializa es S = D − CA⁻¹B. El residuo que el portal muestra en el ensayo IEEE-33 HBCF permanece a la vista: 3,19 × 10⁻¹⁴ pu, en el orden de 10⁻¹⁴. Las diez piezas territoriales y los cuatro macrodominios se leen como esas placas, con la Ley 345-22 tal como la sección territorial del portal ya la nombra. La misma costura, más adelante, deja ver que el método viaja a otros sistemas insulares sin dibujar la red de nadie.

---

## Bloque B — Activos Eléctricos Reales

Ninguno de estos cinco artefactos está hoy incrustado en el portal. Se generan en una copia aislada, fuera de esta fase, y entran como SVG en línea o como imagen `data:`. La política del portal admite imágenes solo por ese conducto, con `default-src 'none'` y `connect-src 'none'`.

El paquete visual tiene un techo de 268 KB. El portal pesa hoy 217 317 B (212 KB). Juntos quedan en torno a 480 KB, bajo 1 MB.

| # | Pieza | Herramienta | Ruta de base en el repositorio | Peso |
| :-: | :--- | :--- | :--- | ---: |
| 1 | Unifilar 345/138 kV de Julio Sauri, dos autotransformadores de 300 MVA, patios y el enlace documentado hacia Palamara | schemdraw, símbolo `Transformer` | `repositorios/01_redes_y_sistemas_potencia/schemdraw/schemdraw/elements/xform.py` | 18 KB |
| 2 | Cuatro cuadrantes de Kundur (H, N, M, L) con las máscaras públicas del portal y, en el mismo SVG, la nariz Q–V del lazo de 138 kV. El montante de σ_min(J) es un filete de ese SVG | Máscara ya publicada en el portal; estructura de caso público PGLib-OPF | `repositorios/01_redes_y_sistemas_potencia/pglib-opf/pglib_opf_case14_ieee.m` (13 781 B) | 22 KB |
| 3 | Un solo corte isométrico de cuba y bushings, 1280×800, ámbar de emisividad sobre acero. Una vista | `mcp_blender`, primitivas headless y render cuantizado | `mcp_blender/scripts/primitives.py` | ≤ 180 KB |
| 4 | Planta ortográfica de una bahía de 138 kV, en milímetros, alineada con el corte | OpenCADStudio, delineación local | `repositorios/01_licencia_copyleft/OpenCADStudio/` | 32 KB |
| 5 | Cuatro placas —Baleares, Canarias, Ceuta, Melilla— y una costura. Sin mapa de red ajena | Trazo según la nota de práctica TikZ; salida SVG | `V2/V2 Z IA/Prueba de arquitectura/arquitectura_v2.7_montecarlo/v_docente_v1/v_docente_v1/v2.7.5/orquestador/documentacion_cientifica_original/documentacion_cientifica_original_v2.7.3/buenas_practicas_tikz.md` (21 940 B) | 16 KB |

Suma de techo: 18 + 22 + 180 + 32 + 16 = 268 KB. El PNG es el término que puede bajar; los cuatro SVG son el suelo.

Tres exclusiones, medidas en disco, protegen ese techo:

- Los PNG de `mcp_blender/chassis/` pesan entre 1,1 y 1,5 MB cada uno y representan un portátil. Quedan fuera. El render nuevo sigue el camino headless de las primitivas. La banda observada en `mcp_blender/fans/` va de 164 753 B (`fans/ventilador_blower_laptop_front.png`) a 247 511 B (`fans/ventilador_80mm_iso.png`). Por eso el corte eléctrico se cuantiza hasta quedar en 180 KB o menos: la banda de los ventiladores demuestra el orden de un PNG headless, y el tope del portal es más estricto que el archivo más pesado de esa banda.
- `repositorios/01_redes_y_sistemas_potencia/GridCal/src/tests/data/grids/kundur_rms.veragrid` pesa 4 010 140 B. Permanece como referencia de la dinámica clásica de dos áreas y no entra al portal. Lo visible es el SVG de los cuadrantes.
- PyPSA está en `repositorios/01_redes_y_sistemas_potencia/PyPSA/` como biblioteca de referencia. No se embebe un modelo continental ni una cartografía de operador.

OpenCADStudio se usa como aplicación local de delineación 2D/3D. No se abre su sitio web. La planta y el corte comparten escala: 1 unidad de Blender = 1 mm, que es el contrato de unidades de `mcp_blender`.

El método TikZ de la pieza 5 es una nota de trazo de 21 940 B. De ella sale un SVG nuevo. No se incrusta la nota, ni un PDF del expediente, ni un logotipo de simposio.

---

## Bloque C — Vender sin Decirlo (Beneficio UPV)

La sección 10 del portal ya ofrece la alianza. Esta elevación no la repite en voz más alta. Afila las diez bondades con los nombres que el propio portal enseña, y deja que la física haga el resto.

1. **Desacoplo diakóptico territorial.** Diez piezas, cuatro macrodominios, costura de Schur–Kron, Ley 345-22. El ensayo IEEE-33 HBCF muestra 3,19 × 10⁻¹⁴ pu. La pieza 5 y el emblema de cuatro placas hacen esa frase inspeccionable.
2. **Confinamiento.** Catorce compuertas fail-closed y 119/119 pruebas unitarias, según la ficha del Corte 3. En la sala, el portal carga con la red cerrada. El resultado se examina donde se proyecta.
3. **Calibración empírica vectorizada.** Diez réplicas anuales de la serie del Organismo Coordinador: 87 360 horas generadas en 2,65 ms. La cifra mide esa generación. El portal ya separa este tiempo de una solución de 87 360 flujos de potencia en alterna.
4. **Trinidad científica.** Motor físico, analizador forense y validador independiente, con custodia SHA-512. Cuatro hitos destacados y ocho fronteras documentadas, como dice la ficha. Δκ = 0,00 % es la coincidencia visible de dos de esas lecturas.
5. **Diagnóstico de asfixia reactiva.** Condición, modos críticos y σ_min(J) para estudiar la proximidad a la singularidad. La membrana Q–V y el montante delgado ocupan la misma lámina.
6. **Aplanamiento de inversión.** CIGRE 244. El ensayo de reconducción del corredor y adecuación de bahía mueve el ratio de coste de 10,09× a 1,18×. Se muestran ratios. El corte de la cuba y la planta de la bahía dan cuerpo a esa alternativa física.
7. **Regulación continua Q–V.** Característica sigmoidal integrada en el Newton en alterna. El contraste de la derivada analítica frente a diferencias finitas es 5,32 × 10⁻¹², con el alcance de la ficha: contraste de derivada, no residual universal.
8. **Benchmark abierto.** SENI-142 y la monografía figuran depositados según el expediente del portal. El corpus declarado supera 180 GB, y el portal ya advierte que ese volumen no es el tamaño del depósito. Los identificadores de depósito se nombran; no se descargan durante la proyección.
9. **Cascada adaptativa.** 13/13 redes canónicas en el alcance del acta de escenarios. La ficha ya limita la lectura: ese resultado no extiende el éxito de cada método a todo punto operativo.
10. **Robustez N−1.** Catálogo público de 215 eventos del SENI: 135 líneas, 58 transformadores y 22 unidades. El banco RTS se mantiene separado, como la ficha indica. El caso que la sala puede señalar con el dedo es el corredor de 345 kV hacia Julio Sauri, con los dos autotransformadores de 300 MVA y el anillo de 138 kV.

**Solver y benchmark.** La sección 08 ya parte la pantalla en dos. SENI-IA es el motor que resuelve: física, diagnóstico, optimización y custodia, con el núcleo industrial protegido. SENI-142 es la ciencia que se comparte: el modelo nacional derivado, con datos, artefactos y protocolo para reproducir y enseñar. La elevación visual pertenece a la mitad que se puede mostrar. El núcleo permanece protegido.

**Primer benchmark en español.** La distinción que el portal propone a la UPV es impulsar un benchmark nacional presentado en español y apadrinado por una universidad española ante el IEEE, con la UPV como referencia del ámbito hispanohablante. La primacía queda escrita como la aspiración que el portal ya publica, construida con el Dr. Manuel Alcázar Ortega y el Vicerrectorado.

**SEIE.** Baleares (Mallorca, Menorca, Ibiza), Canarias (Tenerife, Gran Canaria, El Hierro), Ceuta y Melilla se muestran como cuatro placas con la misma costura de frontera. Cada sistema exige su propia validación. La pieza 5 es esa frase en geometría. No hay unifilar de un operador peninsular ni de un sistema no peninsular ajeno al modelo docente.

**Coautoría.** La ficha de la alianza enumera, entre los beneficios sujetos a acuerdos y a las evaluaciones aplicables, la coautoría sénior Two-Part en IEEE Transactions on Power Systems. La elevación la deja en ese estatuto: una vía académica abierta por la evidencia que la sala acaba de ver, pendiente de acuerdo y de evaluación.

---

## Bloque D — Verificación Doble Muralla

Este documento se ha escrito para pasar el mismo filtro con el que `verificar_portal.mjs` protege el texto público.

- Identificadores internos de motor, la serie completa de la letra M seguida de dos cifras: ausentes. Los nombres usados son los de la ficha: motor físico, analizador forense, validador SVD independiente.
- Código de sistemas y kernels propietarios: ausentes. No hay fragmentos de implementación.
- Clausulado de propiedad industrial: ausente. No se abre ni se cita el directorio `info_patente/`. No se reproduce texto de patente.
- Telemetría cruda privada: ausente. Las cifras son las que el portal ya publica, con su alcance.
- Red externa: ausente. No hay esquema de URL, ni descarga de un depósito, ni cartografía de un operador, ni llamada a un servicio. Los depósitos se nombran como el portal ya los nombra.
- Rutas absolutas del anfitrión: ausentes. Toda ruta de este archivo es relativa al repositorio, de modo que el texto pueda elevarse sin arrastrar el camino de la máquina.
- La cifra de latencia que el filtro del portal rechaza: ausente. La única latencia citada es 2,65 ms, con el alcance de bootstrap ya separado en la ficha.

La muralla es doble porque el contenido y el conducto coinciden. El contenido omite el núcleo. El conducto, cuando estas piezas entren al portal, será SVG en línea o `data:`, bajo `default-src 'none'`.

---

## Bloque E — Plan y Presupuesto Técnico

Esta fase termina en este archivo. El orden siguiente ocurre en una copia aislada del portal y no se ejecuta aquí.

1. Generar los SVG 1, 2, 4 y 5 con schemdraw, la máscara pública de cuadrantes, OpenCADStudio en local y el método de trazo TikZ. Comprobar que cada archivo queda en el peso de la tabla.
2. Generar un solo PNG isométrico con `mcp_blender` a partir de primitivas, a 1280×800, y cuantizarlo hasta 180 KB o menos. Descartar cualquier vista de `mcp_blender/chassis/`.
3. Incrustar los SVG en línea y el PNG como `data:`. Sin `img` apuntando a un archivo externo y sin URL.
4. Pasar `verificar_portal.mjs` sobre la copia. El filtro cubre el documento único, la ausencia de red, las anclas, las diez bondades, los identificadores internos y las rutas del anfitrión.
5. Pasar `verificar_navegador_final.mjs` con la red emulada cerrada, el tema y el modo de presentación, y el viewport de 1280×800. Comprobar que `orbit.frames` avanza con el movimiento permitido y permanece quieto con `prefers-reduced-motion` y al salir de la escena.
6. Confirmar el presupuesto sobre la copia: 217 317 B del portal actual más un paquete visual de techo 268 KB, en torno a 480 KB, bajo 1 MB.

**60 FPS.** El único bucle de animación sigue siendo el `requestAnimationFrame` del canvas orbital ya existente. Las cinco piezas nuevas son estáticas. A 1280×800 el decodificado de un PNG de hasta 180 KB y de cuatro SVG de menos de 40 KB cada uno no abre un segundo reloj. Así el presupuesto de imagen y el de fotogramas se sostienen juntos.

**Compatibilidad.** `verificar_portal.mjs` y `verificar_navegador_final.mjs` no se modifican. `index.html` no se modifica en esta fase. La rama no se envía al remoto: queda prohibido ejecutar `git push`.

Cuando la copia aislada supere los dos verificadores, la elevación estará lista para que el Dr. Manuel Alcázar Ortega y el Vicerrectorado vean la subestación, la costura y la cifra en la misma placa.
