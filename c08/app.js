const express = require("express");
const { expressjwt: jwt } = require("express-jwt");
const fileUpload = require("express-fileupload");

const connectDB = require("./pkg/db/config");
connectDB();
const { getSection } = require("./pkg/config");
const {
  login,
  register,
  refreshToken,
  resetPassword,
} = require("./handlers/auth");
const { upload, download } = require("./handlers/storage");
const {
  getAllPosts,
  createPost,
  updatePost,
  removePost,
} = require("./handlers/posts");

const app = express();
const NO_TOKEN_ROUTES = ["/auth/login", "/auth/register", "/auth/reset"];

app.use(express.json());
app.use(fileUpload());
app.use(
  jwt({
    secret: getSection("development").jwt_secret,
    algorithms: ["HS256"],
  }).unless({
    path: NO_TOKEN_ROUTES,
  })
);

// Authorization routes
app.post("/auth/login", login);
app.post("/auth/register", register);
app.post("/auth/refresh", refreshToken);
app.post("/auth/reset", resetPassword);

// Storage routes
app.post("/api/storage", upload);
app.get("/api/storage/:filename", download);

// Posts routes
app.get("/posts", getAllPosts);
app.post("/posts", createPost);
app.put("/posts/:id", updatePost);
app.delete("/posts/:id", removePost);

// Recipe routes

app.listen(getSection("development").port, () =>
  console.log(`Server started at port ${getSection("development").port}`)
);
