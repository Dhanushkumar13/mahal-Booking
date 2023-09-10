const express = require("express");
const app = express();
const MahalController = require("./Controllers/Mahal.Controller");

app.use("/mahal", MahalController);


module.exports = app;
