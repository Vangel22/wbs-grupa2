// Infrastrukturen kod
const express = require("express");

const app = express();

app.use(express.json());

app.listen(3000, () => console.log("Server is started at port 3000!"));
