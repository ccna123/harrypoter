const express = require("express");
const serverless = require("serverless-http");
require("dotenv").config();

const charRoute = require("./controller/chars");
const spellRoute = require("./controller/spells");
const bookRoute = require("./controller/books");

const app = express();
app.get("/api/health", (req, res) => {
  res.status(200).send({
    mess: "Success",
  });
});

app.use("/api/harrypotter", charRoute);
app.use("/api/harrypotter", spellRoute);
app.use("/api/harrypotter", bookRoute);

if (process.env.ENVIRONMENT === "lambda") {
  module.exports.handler = serverless(app);
} else {
  app.listen("4000", () => {
    console.log("Server listening on port 4000");
  });
}
