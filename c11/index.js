const express = require("express");
const { expressjwt: jwt } = require("express-jwt");

const connectDB = require("./pkg/db/config");
connectDB(); // inizijalizirano databaza
const { getSection } = require("./pkg/config");
const {
  login,
  refreshToken,
  register,
  resetPassword,
  resetPasswordTemplate,
  forgotPassword,
} = require("./handlers/auth");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(
  "/api",
  jwt({
    secret: getSection("development").jwt_secret,
    algorithms: ["HS256"],
  }).unless({
    path: [
      "/api/auth/login",
      "/api/auth/register",
      "/api/auth/forgot-password",
      "/api/forgot-password",
    ],
  })
);

app.post("/api/auth/login", login);
app.post("/api/auth/register", register);
app.post("/api/auth/refresh", refreshToken);
app.get("/api/forgot-password", (req, res) => {
  res.render("forgot-password");
});

app.post("/api/auth/forgot-password", forgotPassword);
app.get("/reset-password/:id/:token", resetPasswordTemplate);
app.post("/reset-password/:id/:token", resetPassword);

app.listen(getSection("development").port, () =>
  console.log(`Server started at port ${getSection("development").port}`)
);
