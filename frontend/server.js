const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("form");
});

app.post("/submit", async (req, res) => {
  const response = await axios.post("http://backend:5000/submit", {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });

  res.json(response.data);
});

app.listen(3000, () => {
  console.log("Frontend running on port 3000");
});
