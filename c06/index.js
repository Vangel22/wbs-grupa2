const express = require("express");
const { expressjwt: jwt } = require("express-jwt");

const connectDB = require("./pkg/db/config");
connectDB();
const { getSection } = require("./pkg/config");
const { login, register } = require("./handlers/auth");

const app = express();
app.use(express.json());

app.use(
  jwt({
    secret: getSection("development").jwt_secret,
    algorithms: ["HS256"],
  }).unless({
    path: ["/auth/login", "/auth/register"],
  })
);

app.get("/", (req, res) => res.send("Hello World!"));
app.post("/auth/login", login);
app.post("/auth/register", register);

app.listen(3000, () => console.log("Server started at port 3000!"));

// Cekor 1
// Napravete json za Library

// Cekor 2
// Implementacija vo mongoose Schema

// Cekor 3
// CRUD funkcionalnost vo modelot

// Cekor 4
// Handler za tie funkcionalnosti

// Cekor 5
// Ruti za tie kontroleri
