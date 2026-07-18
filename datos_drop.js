/* ============================================================
   NEGOCIO "DROP" (Dropshipping)  —  Colombia + Guatemala
   ------------------------------------------------------------
   Este es un negocio distinto a Mercado Libre. El dinero vive
   en 3 cajas: Mercury (USD, tarjeta/banco de la LLC), Dropi
   Colombia (COP) y Dropi Guatemala (GTQ).

   Dos bloques:
   1) saldos  -> cuánto hay en cada caja el día 1 de cada mes.
   2) gastos  -> gastos mensuales extraídos del extracto de la
      tarjeta Mercury (pauta de Facebook + herramientas). NO
      incluye gastos pagados por Dropi ni costo de producto.

   Monedas: mercury=USD · dropiCO=COP · dropiGT=GTQ (quetzales)
   Tasas editables (usdCop = pesos por dólar, gtqCop = pesos por quetzal).
   ============================================================ */

const DROP = {

  // ---------- SALDOS (snapshot día 1) ----------
  saldos: {
    "2026-07": {
      etiqueta: "1 Jul 2026",
      tasas: { usdCop: 3400, gtqCop: 426 },   // aprox. de mercado — editar si usas TRM exacta
      plataformas: {
        mercury: { moneda: "USD", monto: 9366 },
        dropiCO: { moneda: "COP", monto: 45381723 },
        dropiGT: { moneda: "GTQ", monto: 18049.34 }
      }
    }
  },

  // ---------- GASTOS mensuales (extracto tarjeta Mercury) ----------
  gastos: {
    "2026-05": {
      etiqueta: "May 2026",
      periodo: "3 may – 2 jun",
      usdCop: 3800,          // tasa aprox. del mes para pasar a COP (editable)
      totalUsd: 1487.83,
      categorias: {
        "Pauta (Facebook Ads)": 1354.85,
        "The Lucid Holding": 88.00,
        "IA (Anthropic/OpenAI/xAI/DeepSeek)": 44.98
      }
    },
    "2026-06": {
      etiqueta: "Jun 2026",
      periodo: "3 jun – 2 jul",
      usdCop: 3450,
      totalUsd: 283.23,
      categorias: {
        "Pauta (Facebook Ads)": 107.53,
        "The Lucid Holding": 88.00,
        "AliExpress": 43.60,
        "IA (Anthropic/OpenAI/xAI/DeepSeek)": 21.53,
        "Dominios (Namecheap)": 11.98,
        "Proxies (Proxy-cheap)": 10.59
      }
    }
  }

};
