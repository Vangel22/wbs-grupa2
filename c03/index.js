// Infrastrukturen kod
const express = require("express");

// const connectToDB = require("./db/config");
// connectToDB();

// Curry function
require("./db/config")();

const {
  getAllAccounts,
  createNewAccount,
  updateCurrentAccount,
  removeCurrentAccount,
} = require("./handlers/accounts");

const app = express();

app.use(express.json());

app.get("/accounts", getAllAccounts);
app.post("/accounts", createNewAccount);
app.put("/accounts/:id", updateCurrentAccount);
app.delete("/accounts/:id", removeCurrentAccount);

app.listen(3000, () => console.log("Server is started at port 3000!"));
