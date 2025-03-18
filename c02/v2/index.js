const express = require("express");

const connectToDB = require("./db/config");
connectToDB();

const { getVehicle, createVehicle, removeVehicle } = require("./handlers/cars");

const app = express();
app.use(express.json());

app.get("/cars", getVehicle);
app.post("/cars", createVehicle);
app.delete("/cars/:id", removeVehicle);

app.listen(3000, () => console.log("Server started at port 3000!"));
