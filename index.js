const { default: axios } = require("axios");
const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(
      "https://potterapi-fedeperin.vercel.app/en/characters"
    );
    return res.status(200).json(result.data);
  } catch (error) {
    console.log(error);
  }
});

app.listen("4000", (req, res) => {
  console.log("Server listening on port 4000");
});
