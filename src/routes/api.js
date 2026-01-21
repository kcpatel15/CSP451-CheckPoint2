const express = require("express");
const { getAllItems, createItem } = require("../controllers/items.controller");

const router = express.Router();

// Health check
router.get("/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// GET /api/items -> list items
router.get("/items", getAllItems);

// POST /api/items -> create an item
router.post("/items", createItem);

module.exports = { router };
