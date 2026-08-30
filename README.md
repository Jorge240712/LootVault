# LootVault API — Home Challenge, Misión 29

## 📌 Premisa

LootVault administra el inventario de objetos que sueltan los monstruos en un juego. El sistema funciona, pero soporte lleva dos días recibiendo quejas de jugadores. Nadie sabe todavía cuál es el problema técnico — solo lo que los jugadores reportaron con sus propias palabras.

Tu trabajo: leer los reportes, averiguar qué función de `services/loot.service.js` está fallando en cada caso, escribir el test que lo confirme, usar el debugger para encontrar la causa exacta, corregirla, y dejar un reporte técnico corto documentando qué encontraste.

No toques `routes/` ni `controllers/` — están bien, el problema vive solo en `services/loot.service.js`.

---

## 📥 Bandeja de Soporte

> **Ticket #4471** — "Vendí todo mi inventario y el total de monedas que me dieron no cuadra con lo que debería ser. Le hice cuentas a mano y no da igual."

> **Ticket #4483** — "El sistema me está mostrando como 'ítem más raro' una poción común de las que sueltan hasta los slimes. Eso no puede ser el más raro del inventario."

> **Ticket #4502** — "Tengo 3 objetos legendarios en mi inventario, pero cuando el juego cuenta cuántos legendarios tengo, a veces el juego se congela un segundo y después muestra un número que no es 3."

> **Ticket #4519** — "Maté un tipo de monstruo que nunca me ha soltado nada. El drop rate promedio que muestra la app para ese monstruo no debería ser un error, debería ser simplemente 0%."

Cada reporte corresponde a una función específica en `services/loot.service.js` — el comentario de cada función te dice exactamente qué debería pasar. Tu trabajo es conectar la queja del jugador con la función responsable, no adivinar a ciegas.

---

## 🎫 Los Tickets

### Ticket 1 → Reporte #4471
Función responsable: `calcularValorInventario`. Escribe el test, corre `node --test`, si falla usa el debugger, documenta y corrige.

### Ticket 2 → Reporte #4483
Función responsable: `obtenerItemMasRaro`. Mismo proceso.

### Ticket 3 → Reporte #4502
Función responsable: `contarItemsLegendarios`. Mismo proceso. Ojo con el mensaje de error si el test o el debugger te muestran uno — dice más de lo que parece.

### Ticket 4 → Reporte #4519
Función responsable: `calcularDropRatePromedio`. Mismo proceso. Revisa qué pasa cuando el array de intentos está vacío.

### 💎 Ticket Bonus (nivel diosito)
Función `ordenarInventarioPorValor`. No llegó ningún reporte de soporte sobre esta — la encontraste tú solo revisando el código. Pista: este bug no se ve llamando la función una sola vez, y no tiene que ver con el valor que devuelve, sino con lo que le pasa al array que le pasaste como argumento *después* de haberla llamado.

---

## 📝 Entregable: Reporte de Incidentes

Completa `BUGS.md` con un reporte de 3 líneas por cada ticket resuelto (formato ya está en el archivo). Esto es tan parte de la entrega como el código corregido — un bug arreglado sin documentar no ayuda al siguiente que toque ese archivo.

---

## 🔗 Estructura del proyecto

```
lootvault-api/
├── routes/
│   └── loot.routes.js
├── controllers/
│   └── loot.controller.js
├── services/
│   └── loot.service.js
├── tests/
│   └── loot.test.js
├── BUGS.md
├── server.js
└── package.json
```
