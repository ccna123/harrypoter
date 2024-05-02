const { default: axios } = require("axios");
const express = require("express");
const serverless = require("serverless-http");

const charRoute = require("./chars");
const spellRoute = require("./spells");
const bookRoute = require("./books");

const app = express();

app.get("/health", (req, res) => {
  res.status(200).send({
    mess: "Success",
  });
});

app.use("/harrypotter", charRoute);
app.use("/harrypotter", spellRoute);
app.use("/harrypotter", bookRoute);

// app.listen("4000", (req, res) => {
//   console.log("Server listening on port 4000");
// });

module.exports.handler = serverless(app);
