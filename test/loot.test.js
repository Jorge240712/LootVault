// tests/loot.test.js
//
// Para cada TODO: arma los datos de entrada según el ejemplo del comentario
// en services/loot.service.js, llama la función real, y compara con
// assert.strictEqual(). Corre "node --test" después de cada uno. Si falla,
// usa el debugger antes de tocar el service.

const test = require("node:test");
const assert = require("node:assert");
const {
    calcularValorInventario,
    obtenerItemMasRaro,
    contarItemsLegendarios,
    calcularDropRatePromedio,
    ordenarInventarioPorValor
} = require("../services/loot.service");


// 🎫 TICKET 1 → Reporte #4471
test("calcula el valor total del inventario correctamente", () => {
    const items = [
        { precio: 50 },
        { precio: 120 },
        { precio: 30 }
    ];

    const resultado = calcularValorInventario(items);

    assert.strictEqual(resultado, 200);
});


// 🎫 TICKET 2 → Reporte #4483
test("encuentra el item con la rareza más alta", () => {
    // TODO: arma un array de items con "nombre" y "rareza"
    const objetos = [
        { nombre: "Poción", rareza: 1 }, 
        { nombre: "Espada Draconica", rareza: 9 }, 
        { nombre: "Escudo", rareza: 4 }
    ];
    // TODO: llama a obtenerItemMasRaro con ese array
    const resultado = obtenerItemMasRaro(objetos);
    // TODO: assert.strictEqual(resultado.nombre, el nombre que esperas)
    assert.strictEqual(resultado.nombre, "Espada Draconica");
});


// 🎫 TICKET 3 → Reporte #4502
test("cuenta correctamente los items legendarios", () => {
    // TODO: arma un array de items con "tipo"
    const items =  [
        { tipo: "legendario" }, 
        { tipo: "comun" }, 
        { tipo: "legendario" }, 
        { tipo: "raro" }
    ];
    // TODO: llama a contarItemsLegendarios con ese array
    const resultado = contarItemsLegendarios(items);
    // TODO: assert.strictEqual(resultado, el número que esperas)
    assert.strictEqual(resultado, 2);
});


// 🎫 TICKET 4 → Reporte #4519
// Ojo: escribe también un segundo test para el caso del array vacío
test("calcula el drop rate promedio correctamente", () => {
    // TODO: arma un array de intentos con "obtuvoDrop"
    const intentos = [
        { obtuvoDrop: true }, 
        { obtuvoDrop: false }, 
        { obtuvoDrop: true }, 
        { obtuvoDrop: false }
    ];
    // TODO: llama a calcularDropRatePromedio con ese array
    const resultado = calcularDropRatePromedio(intentos);
    // TODO: assert.strictEqual(resultado, el número que esperas)
    assert.strictEqual(resultado, 50);
});

test("devuelve 0 cuando no hay intentos registrados", () => {
    // TODO: llama a calcularDropRatePromedio con un array vacío
    const intentos = [];
    const resultado = calcularDropRatePromedio(intentos);
    // TODO: assert.strictEqual(resultado, 0)
    assert.strictEqual(resultado, 0);
});


// 💎 TICKET BONUS — nivel diosito
// Pista en el comentario de ordenarInventarioPorValor en loot.service.js.
// No hace falta ninguna herramienta nueva — con assert.strictEqual() alcanza.
// La pista está en QUÉ comparas, no en CÓMO lo comparas.
test("ordena el inventario sin modificar el array original", () => {
    // TODO: arma un array de items con "precio", en un orden cualquiera
    //       (por ejemplo: el primero con el precio MÁS BAJO del grupo)
    const items = [
        {precio: 50}, 
        {precio: 200}, 
        {precio: 10}
    ];
    // TODO: guarda en una variable el precio del primer item ANTES de
    //       llamar la función (items[0].precio)
    const primerPrecio = items[0].precio;
    // TODO: llama a ordenarInventarioPorValor con ese array
    const itemsOrdenados = ordenarInventarioPorValor(items);
    // TODO: assert.strictEqual(items[0].precio, la variable que guardaste)
    //       ¿el primer item del array original sigue siendo el mismo
    //       después de llamar la función, o cambió?
    assert.strictEqual(items[0].precio, primerPrecio);
});
