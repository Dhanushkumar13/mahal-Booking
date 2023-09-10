/**
 * 1. CREATE BASIC EXPRESS SERVER
 */
const express = require("express");
const httpServer = express();

//IMPORTING APPS
const app = require("./app");
const PORT = 5000;

httpServer.listen(PORT, "localhost", () => {
  console.log("Server started");
});

// API SERVER
httpServer.use("/api", app);

