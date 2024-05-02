const express = require("express");
const router = express.Router();

router.get("/spells", async (req, res) => {
  return res.json([
    {
      spell: "Accio",
      use: "Summoning charm",
      index: 0,
    },
    {
      spell: "Glisseo",
      use: "Turns a staircase into a slide",
      index: 1,
    },
    {
      spell: "Impervius",
      use: "Protects caster from a variety of substances, including water and fire",
      index: 2,
    },
    {
      spell: "Wingardium Leviosa/Locomotor",
      use: "Levitates objects",
      index: 3,
    },
    {
      spell: "Scourgify",
      use: "Cleans things",
      index: 4,
    },
  ]);
});

module.exports = router;
