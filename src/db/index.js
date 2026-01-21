/**
 * Database module (in-memory implementation for checkpoint).
 *
 * Feature branch: feature/database-connection
 * Implements:
 * - connect()
 * - getStatus()
 * - simple query simulation
 */

let connected = false;
let connectionTime = null;

function connect() {
  if (!connected) {
    connected = true;
    connectionTime = new Date();
  }

  return {
    connected,
    connectedAt: connectionTime,
    driver: "in-memory-stub",
  };
}

function getStatus() {
  return {
    connected,
    connectedAt: connectionTime,
  };
}

function fakeQuery() {
  if (!connected) {
    throw new Error("Database not connected");
  }

  return {
    result: "sample data",
    fetchedAt: new Date(),
  };
}

module.exports = {
  connect,
  getStatus,
  fakeQuery,
};
