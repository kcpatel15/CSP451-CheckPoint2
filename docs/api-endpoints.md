# API Endpoints Feature

Branch: `feature/api-endpoints`

## Overview
This feature expands the API by adding structured routes, controllers,
validation logic, and a POST endpoint.

## Implementation Details
- Controller added: `src/controllers/items.controller.js`
- Validation service added: `src/services/validation.js`
- Routes updated: `src/routes/api.js`
- JSON body parsing enabled in `src/app.js`

## Endpoints

### GET /api/health
Returns API status and current timestamp.

### GET /api/items
Returns all items stored in memory.

Example response:
```json
{
  "ok": true,
  "count": 1,
  "items": [],
  "time": "timestamp"
}
