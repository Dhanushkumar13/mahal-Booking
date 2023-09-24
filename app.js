const express = require("express");
const app = express();
const fs = require("node:fs/promises")
const MahalController = require("./Controllers/MahalRoom.Controller");
const BookingController = require("./Controllers/RoomBooking.Controller");
const BookedController = require('./Controllers/RoomsBooked.Controller');
const CustomerController = require('./Controllers/Customer.Controller');
const CustomerBookedController = require('./Controllers/CustomerBooked.Controller');



app.use("/mahal", MahalController);
app.use("/booking", BookingController);
app.use("/booked", BookedController );
app.use("/customer", CustomerController);
app.use("/data", CustomerBookedController);


module.exports = app;
