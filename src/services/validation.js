// src/services/validation.js
function validateNewItem(body) {
  const errors = [];

  const name = body?.name;
  const quantity = body?.quantity;

  if (typeof name !== "string" || name.trim().length < 2) {
    errors.push("name must be a string with at least 2 characters");
  }

  const qtyNum = Number(quantity);
  if (!Number.isFinite(qtyNum) || qtyNum < 1) {
    errors.push("quantity must be a number greater than or equal to 1");
  }

  return { valid: errors.length === 0, errors };
}

module.exports = { validateNewItem };
