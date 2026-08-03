# mon — copia de tránsito del dashboard financiero

**Este repo no es el proyecto vivo.** El dashboard corre en el repo `judiff`:

- Sitio publicado: https://juanfonsecax.github.io/judiff/panel/
- Código: https://github.com/juanfonsecax/judiff → carpeta `panel/`

## Qué había aquí antes

`mon` tenía una tercera copia del mismo dashboard (`dashboard.html` +
`datos_ventas.js` + `datos_drop.js`). Se verificó que sus números eran
idénticos a los de las otras dos copias — misma suma de ventas concretadas,
100.530.128 COP entre los 4 meses de las 2 cuentas — así que no se perdió
ningún dato al quitarlos. Quedan en el historial de git si se necesitan.

## Qué hay ahora en `panel/`

La versión consolidada y probada, lista para reemplazar `panel/` en `judiff`:

```
panel/
  index.html   <- solo código; carga datos.json con fetch al abrir
  datos.json   <- todos los números
  CLAUDE.md    <- proceso mensual y reglas de cálculo
```

La diferencia con lo que hoy está publicado en `judiff` es que allá los
números viven incrustados dentro del `index.html`, lo que obliga a editar el
archivo de código en cada actualización mensual. Con esta versión, actualizar
el dashboard es reemplazar `datos.json` y nada más.

Probado en navegador sobre `python3 -m http.server`: `datos.json` carga, las 8
gráficas pintan, el selector trae los 4 meses, y no aparecen `NaN` ni errores
de consola.

## Cómo mover esto a judiff

Copiar `panel/index.html` y `panel/datos.json` sobre `judiff/panel/`, y
`panel/CLAUDE.md` a la raíz de `judiff`. Hacer commit y push a `main`;
GitHub Pages republica solo en ~1 minuto.

Una vez hecho eso, este repo se puede vaciar o archivar.
