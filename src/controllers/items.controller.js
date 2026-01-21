// src/controllers/items.controller.js
const { validateNewItem } = require("../services/validation");

let items = [];
let nextId = 1;

function getAllItems(req, res) {
  res.json({
    ok: true,
    count: items.length,
    items,
    time: new Date().toISOString(),
  });
}

function createItem(req, res) {
  const { valid, errors } = validateNewItem(req.body);

  if (!valid) {
    return res.status(400).json({
      ok: false,
      errors,
      time: new Date().toISOString(),
    });
  }

  const newItem = {
    id: nextId++,
    name: req.body.name.trim(),
    quantity: Number(req.body.quantity),
    createdAt: new Date().toISOString(),
  };

  items.push(newItem);

  return res.status(201).json({
    ok: true,
    item: newItem,
    time: new Date().toISOString(),
  });
}

module.exports = { getAllItems, createItem };
