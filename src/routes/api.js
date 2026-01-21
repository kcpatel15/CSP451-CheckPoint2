const express = require("express");
const { getAllItems, createItem } = require("../controllers/items.controller");
const db = require("../db");

const router = express.Router();

// Health check
router.get("/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// GET /api/items -> list items
router.get("/items", getAllItems);

// POST /api/items -> create an item
router.post("/items", createItem);
router.get("/db-status", (req, res) => {
  try {
    const status = db.getStatus();
    res.json({
      ok: true,
      database: status,
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      error: err.message,
    });
  }
});

module.exports = { router };
