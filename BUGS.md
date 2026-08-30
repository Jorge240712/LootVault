# Reporte de Incidentes — LootVault

Completa una entrada por cada ticket que resolviste. Tres líneas, directo al grano.

---

## Ticket 1 → Reporte #4471

**Reportado:** El valor total del inventario no coincidía con la suma de los precios.
**Encontrado:** `calcularValorInventario` sumaba `item.valor`, pero los objetos usan `item.precio`.
**Corregido:** Se cambió `item.valor` por `item.precio`.

---

## Ticket 2 → Reporte #4483

**Reportado:** Se mostraba un objeto común como el ítem más raro.
**Encontrado:** `obtenerItemMasRaro` comparaba la rareza usando `<` en lugar de buscar la más alta.
**Corregido:** Se cambió la comparación a `>`.

---

## Ticket 3 → Reporte #4502

**Reportado:** El conteo de objetos legendarios daba un error y no devolvía correctamente la cantidad.
**Encontrado:** El `for` usaba `i <= items.length` y accedía a una posición inexistente del array.
**Corregido:** Se cambió la condición a `i < items.length`.

---

## Ticket 4 → Reporte #4519

**Reportado:** El drop rate de un monstruo sin intentos mostraba un resultado incorrecto.
**Encontrado:** Con un array vacío se dividía entre `0`, produciendo `NaN`.
**Corregido:** Se agregó una comprobación para devolver `0` cuando `intentos.length === 0`.

---

## 💎 Ticket Bonus (si lo resolviste)

**Encontrado:** `sort()` modificaba directamente el array original recibido como argumento.
**Corregido:** Se creó una copia con `[...items]` antes de ordenar.
