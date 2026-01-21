# Database Connection Feature

Branch: `feature/database-connection`

## Overview
This feature adds a simple in-memory database module to simulate
a real database connection for the application.

## Implementation
- Implemented connection logic in `src/db/index.js`
- Database state is tracked in memory
- Exposed status through API endpoint

## API Endpoint
GET /api/db-status

### Example Response
```json
{
  "ok": true,
  "database": {
    "connected": true,
    "connectedAt": "timestamp"
  }
}
