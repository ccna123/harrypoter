const express = require("express");
const router = express.Router();

router.get("/chars", async (req, res) => {
  return res.json([
    {
      fullName: "Harry James Potter",
      nickname: "Harry",
      hogwartsHouse: "Gryffindor",
      interpretedBy: "Daniel Radcliffe",
      children: [
        "James Sirius Potter",
        "Albus Severus Potter",
        "Lily Luna Potter",
      ],
      image:
        "https://raw.githubusercontent.com/fedeperin/potterapi/main/public/images/characters/harry_potter.png",
      birthdate: "Jul 31, 1980",
      index: 0,
    },
    {
      fullName: "Hermione Jean Granger",
      nickname: "Hermione",
      hogwartsHouse: "Gryffindor",
      interpretedBy: "Emma Watson",
      children: ["Rose Granger-Weasley", "Hugo Granger-Weasley"],
      image:
        "https://raw.githubusercontent.com/fedeperin/potterapi/main/public/images/characters/hermione_granger.png",
      birthdate: "Sep 19, 1979",
      index: 1,
    },
    {
      fullName: "Ron Weasley",
      nickname: "Ron",
      hogwartsHouse: "Gryffindor",
      interpretedBy: "Rupert Grint",
      children: ["Rose Granger-Weasley", "Hugo Granger-Weasley"],
      image:
        "https://raw.githubusercontent.com/fedeperin/potterapi/main/public/images/characters/ron_weasley.png",
      birthdate: "Mar 1, 1980",
      index: 2,
    },
  ]);
});

module.exports = router;
