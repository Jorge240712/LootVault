// controllers/loot.controller.js
// Esta capa ya está correcta — no la toques. El problema de esta tarea
// vive únicamente en services/loot.service.js

const lootService = require("../services/loot.service");

const obtenerValorInventario = (req, res) => {
    let items = req.body.items;

    if (!items) {
        return res.status(400).json({ error: "Faltan los items" });
    }

    let total = lootService.calcularValorInventario(items);
    res.json({ valorTotal: total });
};

const obtenerItemMasRaro = (req, res) => {
    let items = req.body.items;

    if (!items || items.length === 0) {
        return res.status(400).json({ error: "Falta la lista de items" });
    }

    let masRaro = lootService.obtenerItemMasRaro(items);
    res.json(masRaro);
};

const obtenerConteoLegendarios = (req, res) => {
    let items = req.body.items;

    if (!items) {
        return res.status(400).json({ error: "Faltan los items" });
    }

    let conteo = lootService.contarItemsLegendarios(items);
    res.json({ legendarios: conteo });
};

const obtenerDropRatePromedio = (req, res) => {
    let intentos = req.body.intentos;

    if (!intentos) {
        return res.status(400).json({ error: "Faltan los intentos" });
    }

    let promedio = lootService.calcularDropRatePromedio(intentos);
    res.json({ dropRatePromedio: promedio });
};

module.exports = {
    obtenerValorInventario,
    obtenerItemMasRaro,
    obtenerConteoLegendarios,
    obtenerDropRatePromedio
};
