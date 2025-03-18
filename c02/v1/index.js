const express = require("express");

const { getCars, createCar, updateCar } = require("./handlers/cars");

const app = express();
app.use(express.json());

// ruti
app.get("/cars", getCars);
app.post("/cars", createCar);
app.put("/cars/:id", updateCar);
// app.delete("/cars", getCars);

app.listen(3000, () => console.log("Server started at port 3000!"));
