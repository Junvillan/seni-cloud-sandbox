#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
const DIR=path.dirname(fileURLToPath(import.meta.url));
const html=fs.readFileSync(path.join(DIR,'index.html'),'utf8');
const json=id=>JSON.parse(html.match(new RegExp('<script[^>]*id="'+id+'"[^>]*>([\\s\\S]*?)</script>'))[1]);
const cases=json('datos-casos'),red=json('datos-red'),ev=json('datos-evidencias');
const main=html.match(/<script>([\s\S]*?)<\/script>/)[1];
function offline(s){return !(/<(?:script|link|img|iframe|source|video|audio)\b[^>]*(?:src|href)\s*=\s*["']?(?:https?:|\/\/)/i.test(s)||/\b(?:fetch|XMLHttpRequest|WebSocket|EventSource|sendBeacon)\s*\(/.test(s)||/@import\b|\bimport\s*\(/.test(s)||/url\(\s*["']?(?:https?:|\/\/)/i.test(s));}
const gates={
 estructura(){
  assert.match(html.trim(),/^<!DOCTYPE html>/i);assert.match(html.trim(),/<\/html>$/i);
  assert.ok(offline(html));assert.equal(offline(html+'<script src="https://invalid.example/control.js"></script>'),false,'positive control remote source');
  assert.equal(offline(html+'<script>fetch("/control")</script>'),false,'positive control fetch');
  assert.ok(!html.includes('__CASOS__'));new vm.Script(main);
  const markup=html.replace(/<script[\s\S]*?<\/script>/g,'');
  const ids=[...markup.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length,'static IDs unique');
  for(const m of markup.matchAll(/href="#([^"]+)"/g))assert.ok(ids.includes(m[1]),'anchor '+m[1]);
  assert.match(html,/connect-src 'none'/);assert.match(html,/prefers-reduced-motion/);
  console.log('ESTRUCTURA-OK');
 },
 datos(){
  assert.equal(cases.length,24);assert.equal(new Set(cases.map(c=>c.id)).size,24);
  const old=fs.readFileSync(path.join(DIR,'respaldo_pre_cristal_20261113/index.html'),'utf8');
  const original=JSON.parse(old.match(/id="datos-casos">([\s\S]*?)<\/script>/)[1]);
  assert.deepEqual(cases.map(c=>c.id),original.map(c=>c.id));
  for(const c of cases){assert.ok(c.barras>0);assert.ok(c.fuente);assert.ok(c.nota);assert.ok(c.unidad_demanda);if(c.kappa!==null)assert.ok(c.kappa_fuente);}
  for(const id of ['case69','case69_radial_69bus','case85','case85_radial_85bus']){const c=cases.find(c=>c.id===id);assert.equal(c.demanda_mw,null);assert.ok(c.demanda_original>0);}
  for(const e of Object.values(ev)){assert.ok(e.fuente&&e.parrafos.length);assert.ok(e.valor);}
  assert.match(ev.latencia.parrafos.join(' '),/no se atribuye al MacBook M1/);
  assert.match(ev.bootstrap.parrafos.join(' '),/No significa resolver 87.360 flujos/);
  assert.match(ev.n1.parrafos.join(' '),/no acredita por sí sola/);
  console.log('DATOS-OK');
 },
 escenas(){
  for(const id of ['radar','regionGrid','specDetail','orbit','phaseNav','phaseContent','caseGrid','sec-comparativa','sec-alianza'])assert.ok(html.includes('id="'+id+'"'));
  const regions=main.match(/const REGIONES=(\[[\s\S]*?\]);/)[1];assert.equal(vm.runInNewContext(regions).length,10);
  const phases=vm.runInNewContext(main.match(/const PHASES=(\[[\s\S]*?\]);/)[1]);assert.equal(phases.length,9);
  assert.deepEqual(Array.from(phases,p=>p.code),['0','1','2','3–4','5','6','DIA','7–8','9–12']);
  assert.deepEqual(Array.from(phases.filter(p=>p.seal).map(p=>p.seal)),[1,2,3,4]);
  const modules=phases.flatMap(p=>Array.from(p.modules,m=>m.join(' '))).join(' ');for(const name of ['Censo e Ingesta Topológica','Homologador Universal IEEE Std 141','DuckDB / Parquet','Newton-Raphson','Iwamoto-Tanaka','Gauss-Seidel','Analizador Forense','Validador Espectral SVD','Simulador Multiverso','Comparador maestro','Schur–Kron','Wu-Wei','Excel / LaTeX','Dashboard','Certificados','Cadena de Custodia'])assert.ok(modules.includes(name),name);
  assert.match(html,/TELEMETRÍA TRANSVERSAL/);assert.match(html,/Monolito Cerrado/);assert.match(html,/Criptográfica SHA-512/);
  assert.deepEqual([...new Set(red.nodos.map(n=>n.kv))].sort((a,b)=>a-b),[69,138,230,345]);
  for(const id of ['PAL','HAI138','HER138','JS138'])assert.ok(red.nodos.some(n=>n.id===id&&n.kv===138));
  for(const l of red.enlaces)for(const id of [l.a,l.b])assert.ok(red.nodos.some(n=>n.id===id),'edge endpoint');
  console.log('ESCENAS-OK');
 },
 muralla(){
  const forbidden=/(?:1[.,]7\s*ms|\/mnt\/|\/home\/|reivindicaci[oó]n|#include\s*[<"]|BEGIN (?:RSA |OPENSSH )?PRIVATE KEY|(?:api[_-]?key|token)\s*[:=]\s*["'][A-Za-z0-9_-]{20})/i;
  assert.ok(!forbidden.test(html));assert.ok(forbidden.test(html+' /home/control/private'),'positive control private path');
  assert.match(html,/Pulsos ilustrativos/);assert.match(html,/sin ejecución del solver/);assert.match(html,/núcleo industrial protegido/);
  console.log('MURALLA-OK');
 },
 doctoral(){
  const data=name=>vm.runInNewContext(main.match(new RegExp('const '+name+'=(\\[[\\s\\S]*?\\]);'))[1]);
  const regions=data('REGIONES'),phases=data('PHASES'),flow=data('FLOW');
  assert.equal(regions.length,10);assert.equal(regions.flatMap(r=>Array.from(r.provincias)).length,32);
  const provinces=regions.flatMap(r=>Array.from(r.provincias));assert.equal(new Set(provinces).size,32);
  assert.ok(regions.find(r=>r.nombre==='El Valle').provincias.includes('Azua'));
  assert.equal(data('MACROS').length,4);assert.match(html,/Ley 345-22/);
  for(const id of ['triadHero','triadCompare','jacMatrix','jacDetails','flowStations','flowReadout','crystalDetail','nodeInspector','macroTabs'])assert.ok(html.includes('id="'+id+'"'),id);
  for(const name of ['original','ideal','optima'])assert.ok(html.includes('data-network="'+name+'"'));
  const jac=JSON.parse(main.match(/const JAC_STRUCTURE=(\{.*?\});/)[1]);
  assert.deepEqual(Object.keys(jac),['H','N','M','L']);
  assert.deepEqual(Object.values(jac).map(q=>[q.rows,q.cols,q.mask.length]),[[13,13,49],[13,9,35],[9,13,35],[9,9,27]]);
  for(const q of Object.values(jac)){assert.equal(new Set(q.mask.map(p=>p.join(','))).size,q.mask.length);assert.ok(q.mask.every(([r,c])=>r>=0&&r<q.rows&&c>=0&&c<q.cols));}
  const m03=phases.find(p=>p.code==='2');for(const method of ['Newton-Raphson','Iwamoto-Tanaka','FDBX','Gauss-Seidel'])assert.ok(m03.desc.includes(method));
  assert.match(m03.desc,/criterio de contraste/);assert.match(ev.svd.parrafos.join(' '),/no demuestra por sí sola/);
  assert.deepEqual(Array.from(flow,f=>f.code),['Ingesta','Homologación','Persistencia','Solvers','Forensia','SVD','Resiliencia','Sanación','Custodia']);
  assert.ok(flow.every(f=>f.input&&f.output&&f.seal&&phases[f.phase]));
  for(const id of ['radarPanel','orbitPanel'])assert.ok(html.includes('data-expand="'+id+'"'));
  assert.match(main,/function showNode\(id,openModal=true\)[\s\S]*?\$\('#nodeInspector'\)/);
  const nodeFunction=main.match(/function showNode\(id,openModal=true\)\{([\s\S]*?)\nfunction inspectLayer/)[1];assert.ok(nodeFunction.includes('showDialog'));assert.match(main,/showNode\('PAL',false\)/);
  const order=[...html.matchAll(/<section id="([^"]+)"/g)].map(m=>m[1]);assert.ok(order.indexOf('sec-casos')>order.indexOf('sec-terminal'));assert.equal(order.indexOf('sec-alianza'),order.indexOf('sec-casos')+1);
  const rts=cases.find(c=>c.id==='ieee_73bus_rts_gmlc');assert.equal(rts.barras,73);assert.equal(rts.gens,158);assert.equal(rts.eerr_mw,3959);assert.equal(rts.gen_controlados+rts.sgen+rts.ext_grid,158);assert.match(rts.nota,/no ejecutó ese barrido/i);assert.equal(rts.silicio,true);
  for(const tier of ['TIER1','TIER2'])assert.ok(data(tier).includes(rts.id));
  assert.match(html,/exclusividad universitaria/);assert.match(html,/primera institución académica europea/);assert.match(html,/Codirección doctoral/);assert.match(html,/delegación presidencial dominicana/);
  console.log('DOCTORAL-OK');
 },
 final(){
  const silicon=json('datos-silicio');
  assert.equal(silicon.slack+silicon.pv+silicon.pq,silicon.buses);
  assert.equal(silicon.buses-silicon.slack+silicon.pq,silicon.jacobian_size);
  assert.equal(silicon.methods.reduce((s,m)=>s+m.ms,0),silicon.total_ms);
  assert.ok(silicon.residual_pu<silicon.tolerance_pu);
  assert.equal(silicon.n1_converged,silicon.n1_total);
  assert.equal(silicon.generation_entries,158);assert.equal(silicon.eerr_mw,3959);
  assert.match(silicon.source,/comunicada/);assert.match(silicon.source,/acta bruta no adjunta/);
  for(const id of ['diakopticSvg','triadPlay','radarRegionInfo','benefitsGrid','liveConsole','consoleOutput','consoleText','consoleSource','rtsSilicon','upvBenefits'])assert.ok(html.includes('id="'+id+'"'),id);
  assert.match(main,/triadElapsed>=5000/);assert.match(main,/triadPlaying\|\|paused/);assert.match(main,/triadPlaying=false;triadControl/);
  const hero=html.slice(html.indexOf('id="diakopticSvg"'),html.indexOf('class="triad-toolbar"'));
  for(const domain of ['Ω₁','Ω₂','Ω₃','Ω₄','V∠θ','S = D − CA⁻¹B'])assert.ok(hero.includes(domain),domain);
  for(const color of ['#1A365D','#2B6CB0','#D9C282','#C5A84C','#C53030'])assert.ok(html.includes(color),color);
  const publicText=html.replace(/\bd="[^"]*"/g,'').replace(/<style>[\s\S]*?<\/style>/g,'');
  const privateCode=/\b(?:M\d{2}|A\d{2})\b/;
  assert.ok(!privateCode.test(publicText),'no internal motor identifiers');assert.ok(privateCode.test(publicText+' M03'),'positive control internal codes');
  assert.ok(!/d="motor funcional/.test(html),'SVG geometry preserved');
  const benefitSection=html.slice(html.indexOf('id="benefitsGrid"'),html.indexOf('class="evidence-archive"'));
  assert.equal((benefitSection.match(/class="benefit-card"/g)||[]).length,10);
  for(const m of benefitSection.matchAll(/data-evidence="([^"]+)"/g))assert.ok(ev[m[1]],m[1]);
  for(const id of ['14','73'])assert.ok(html.includes('data-console="'+id+'"'));
  assert.match(main,/\[████████████████████\] 100%/);assert.match(main,/function tickConsole/);assert.match(main,/role=\"tab\"/);
  for(const text of ['Censo e Ingesta Topológica','Homologador Universal IEEE Std 141','Persistencia vectorizada en memoria','Cascada Multimétodo de Solvers','Analizador Forense de Impedancias e Ybus','Validador Espectral SVD Independiente','Simulador Multiverso de Contingencias N-1','Regulación continua sigmoidal Q-V','Cadena de Custodia Criptográfica y Manifiesto SHA-512'])assert.ok(html.includes(text),text);
  for(const text of ['SENI-IA produce ciencia. SENI-142','15 años','OC · SIE · MEM · CNE · ETED · EGEHID','Las 31 provincias + Distrito Nacional','2 × 300 MVA','CADENA DE DOCUMENTOS DE SALIDA','espacio nulo','σmin → 0','Two-Part Paper','Cum Laude','Premio Extraordinario','Laboratorio de Computación Avanzada','Simposio Internacional UPV 2026','Máster en Energía','Mallorca','Menorca','Ibiza','Tenerife','Gran Canaria','El Hierro','Gorona del Viento','Ceuta y Melilla','aspiración de posicionamiento'])assert.ok(html.includes(text),text);
  assert.equal((html.slice(html.indexOf('id="upvBenefits"'),html.indexOf('<section id="sec-anexo"')).match(/class="collab-item"/g)||[]).length,6);
  // Same condition number does not identify a nullspace: independent counterexample.
  const a=[[1,0],[0,0]],b=[[0,0],[0,1]],v=[0,1];
  assert.deepEqual(a.map(r=>r[0]*v[0]+r[1]*v[1]),[0,0]);assert.notDeepEqual(b.map(r=>r[0]*v[0]+r[1]*v[1]),[0,0]);
  assert.match(html,/cociente σmax\/σmin por sí solo no determina sus vectores/);
  const boundaries=vm.runInNewContext(main.match(/const REGIONAL_BOUNDARIES=(\[[\s\S]*?\]);/)[1]);assert.equal(boundaries.length,10);assert.ok(boundaries.every(b=>b.buses.length>0));assert.equal(new Set(red.nodos.map(n=>n.bus_publico)).size,red.nodos.length);assert.ok(red.nodos.every(n=>Number.isFinite(n.cad_x)&&Number.isFinite(n.cad_y)));assert.match(html,/8.200,8 MVA \/ 58 agregados/);assert.match(html,/135 líneas \+ 58 transformadores \+ 22 unidades generadoras = 215/);
  console.log('FINAL-OK');
 },
 cli(){
  const run=args=>spawnSync(process.execPath,[fileURLToPath(import.meta.url),...args],{encoding:'utf8',timeout:20000});
  const implicit=run([]),explicit=run(['--gate','all']);assert.equal(implicit.status,0,implicit.stderr);assert.equal(explicit.status,0,explicit.stderr);assert.equal(implicit.stdout,explicit.stdout);
  assert.match(implicit.stdout,/ESTRUCTURA-OK[\s\S]*DATOS-OK[\s\S]*ESCENAS-OK[\s\S]*MURALLA-OK[\s\S]*DOCTORAL-OK[\s\S]*FINAL-OK/);
  assert.notEqual(run(['--gate','inexistente']).status,0);assert.equal(run(['--gate']).status,0);
  console.log('CLI-OK');
 }
};
const idx = process.argv.indexOf('--gate'); const gate = (idx !== -1 && process.argv[idx + 1]) ? process.argv[idx + 1] : 'all';
try{if(gate==='all')Object.entries(gates).filter(([name])=>name!=='cli').forEach(([,f])=>f());else{assert.ok(gates[gate],'unknown gate');gates[gate]();}}catch(e){console.error(e.stack);process.exitCode=1;}
