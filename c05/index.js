const express = require("express");
const { expressjwt: jwt } = require("express-jwt");

const connectDB = require("./pkg/db/config");
connectDB();
const { getSection } = require("./pkg/config");
const { login, register } = require("./handlers/auth");
const {
  getAllPosts,
  createPost,
  updatePost,
  removePost,
} = require("./handlers/posts");

const app = express();
app.use(express.json());

app.use(
  jwt({
    secret: getSection("development").jwt_secret,
    algorithms: ["HS256"],
  }).unless({
    // za ovie pateki ne proveruvaj dali imaat jwt token
    path: ["/auth/login", "/auth/register"],
  })
);
// Greska 401 Unauthorized Access dokolku tokenot ne e validen

app.get("/", (req, res) => res.send("Hello World!"));
app.post("/auth/login", login);
app.post("/auth/register", register);

app.get("/posts", getAllPosts);
app.post("/posts", createPost);
app.put("/posts/:id", updatePost);
app.delete("/posts/:id", removePost);

app.listen(getSection("development").port, () =>
  console.log(`Server started at port ${getSection("development").port}`)
);
