const express = require("express");
const { expressjwt: jwt } = require("express-jwt");

const connectDB = require("./pkg/db/config");
connectDB();
const { getSection } = require("./pkg/config");
const { login, register } = require("./handlers/auth");
const {
  getAllBooks,
  createNewBook,
  updateCurrentBook,
  removeCurrentBook,
  getAllBooksForAuthor,
} = require("./handlers/books");

const app = express();
app.use(express.json());

// /api znaci deka ke se proveruva jwt token na sekoja ruta koja pocnuva so /api
app.use(
  "/api",
  jwt({
    secret: getSection("development").jwt_secret,
    algorithms: ["HS256"],
  })
    // ako koristime /api pred sekoja ruta vo ovoj slucaj .unless nema logika bidejki pocnuva so
    // /auth/...
    .unless({
      path: ["/auth/login", "/auth/register"],
    })
);

app.get("/", (req, res) => res.send("Hello World!"));
app.post("/auth/login", login);
app.post("/auth/register", register);

//public data - site knigi koi se objaveni
app.get("/books", getAllBooks);
// private data - bidejki se zemaat knigite na avtorot
app.get("/api/books/author", getAllBooksForAuthor);
app.post("/api/books", createNewBook);
app.put("/api/books/:id", updateCurrentBook);
app.delete("/api/books/:id", removeCurrentBook);

app.listen(3000, () => console.log("Server started at port 3000!"));

// Cekor 1 -> Zavrseno
// Napravete json za Library

// Cekor 2 -> Zavrseno
// Implementacija vo mongoose Schema

// Cekor 3 -> Zavrseno
// CRUD funkcionalnost vo modelot

// Cekor 4 -> Zavrseno
// Handler za tie funkcionalnosti

// Cekor 5 -> Zavrseno
// Ruti za tie kontroleri

// Cekor 6
// Multitenancy -> getAllBooksForAuthor
