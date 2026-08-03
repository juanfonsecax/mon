# mon — repo retirado

**El dashboard financiero ya no vive aquí.** Corre en el repo `judiff`:

- Sitio publicado: https://juanfonsecax.github.io/judiff/panel/
- Código: https://github.com/juanfonsecax/judiff → carpeta `panel/`

## Qué pasó

`mon` tenía una tercera copia del mismo dashboard (`dashboard.html` +
`datos_ventas.js` + `datos_drop.js`). Se verificó que sus números eran
idénticos a los de las otras dos copias — misma suma de ventas concretadas,
100.530.128 COP entre los 4 meses de las 2 cuentas — así que no se perdió
ningún dato al retirarla. Todo queda en el historial de git.

La versión consolidada se subió a `judiff`, donde GitHub Pages ya estaba
publicando. Allá los datos viven en `panel/datos.json`, separados del código,
y actualizar el dashboard cada mes es reemplazar ese archivo.

Este repo se puede archivar o borrar.
