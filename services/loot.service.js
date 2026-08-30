// services/loot.service.js
//
// Cada función tiene un comportamiento esperado documentado en su comentario.
// Escribe el test según ese comentario, corre "node --test", y si falla,
// usa el debugger antes de tocar nada.

// calcularValorInventario(items)
// Recibe un array de items, cada uno con un campo "precio".
// Debe devolver la suma de todos los precios.
// Ejemplo: [{ precio: 50 }, { precio: 120 }, { precio: 30 }] → 200
const calcularValorInventario = (items) => {
    let total = items.reduce((acumulador, item) => acumulador + item.precio, 0);
    return total;
};

// obtenerItemMasRaro(items)
// Recibe un array de items, cada uno con "nombre" y "rareza" (número: entre
// más alto, más raro es el ítem).
// Debe devolver el objeto del item con la RAREZA MÁS ALTA.
// Ejemplo: [{ nombre: "Poción", rareza: 1 }, { nombre: "Espada Draconica", rareza: 9 }, { nombre: "Escudo", rareza: 4 }]
// → { nombre: "Espada Draconica", rareza: 9 }
const obtenerItemMasRaro = (items) => {
    let masRaro = items[0];

    for (let i = 1; i < items.length; i++) {
        if (items[i].rareza > masRaro.rareza) {
            masRaro = items[i];
        }
    }

    return masRaro;
};

// contarItemsLegendarios(items)
// Recibe un array de items, cada uno con "nombre" y "tipo" ("legendario",
// "raro", "comun", etc).
// Debe devolver cuántos items en el array son de tipo "legendario".
// Ejemplo: [{ tipo: "legendario" }, { tipo: "comun" }, { tipo: "legendario" }, { tipo: "raro" }] → 2
const contarItemsLegendarios = (items) => {
    let contador = 0;

    for (let i = 0; i < items.length; i++) {
        if (items[i].tipo === "legendario") {
            contador = contador + 1;
        }
    }

    return contador;
};

// calcularDropRatePromedio(intentos)
// Recibe un array de intentos de farmeo, cada uno con "obtuvoDrop" (true/false).
// Debe devolver el porcentaje de intentos que sí obtuvieron drop (0 a 100).
// Si el array de intentos está vacío, debe devolver 0 (no se puede calcular
// un porcentaje sin ningún intento).
// Ejemplo: [{ obtuvoDrop: true }, { obtuvoDrop: false }, { obtuvoDrop: true }, { obtuvoDrop: false }] → 50
const calcularDropRatePromedio = (intentos) => {
    if (intentos.length === 0) {
        return 0;
    }

    let exitosos = intentos.filter((intento) => intento.obtuvoDrop).length;
    return (exitosos / intentos.length) * 100;
};

// ════════════════════════════════════════════════════════════
//  💎 BONUS NIVEL DIOSITO — nadie reportó esto, lo encuentras tú
// ════════════════════════════════════════════════════════════
//
// ordenarInventarioPorValor(items)
// Recibe un array de items y debe devolver un array NUEVO, ordenado de
// mayor a menor precio, SIN modificar el array original que se le pasó.
// Ejemplo: dado items = [{precio: 50}, {precio: 200}, {precio: 10}]
// el resultado debe estar ordenado, y "items" (la variable original que
// le pasaste) debe seguir en su orden original después de llamar la función.
const ordenarInventarioPorValor = (items) => {
    const copia = [...items];
    return copia.sort((a, b) => b.precio - a.precio);
};

module.exports = {
    calcularValorInventario,
    obtenerItemMasRaro,
    contarItemsLegendarios,
    calcularDropRatePromedio,
    ordenarInventarioPorValor
};
