import express from "express";
import path from "node:path";

const app = express();
const port = 3000;

// 1. Set EJS as the template engine
app.set("view engine", "ejs");

app.use(express.static(path.join(import.meta.dirname, "public")));

// 1 & 2. Route for the homepage passing your username object
app.get("/", (req, res) => {
  res.render("home", { username: "Matias Rodriguez" });
});

// 5. Add routes to handle rendering the about and contact pages
app.get("/about", (req, res) => {
  res.render("about", { username: "Matias Rodriguez" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { username: "Matias Rodriguez" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});