const express = require("express");
const router = express.Router();

router.get("/books", async (req, res) => {
  return res.json([
    {
      number: 1,
      title: "Harry Potter and the Sorcerer's Stone",
      originalTitle: "Harry Potter and the Sorcerer's Stone",
      releaseDate: "Jun 26, 1997",
      description:
        "On his birthday, Harry Potter discovers that he is the son of two well-known wizards, from whom he has inherited magical powers. He must attend a famous school of magic and sorcery, where he establishes a friendship with two young men who will become his companions on his adventure. During his first year at Hogwarts, he discovers that a malevolent and powerful wizard named Voldemort is in search of a philosopher's stone that prolongs the life of its owner.",
      pages: 223,
      cover:
        "https://raw.githubusercontent.com/fedeperin/potterapi/main/public/images/covers/1.png",
      index: 0,
    },
    {
      number: 2,
      title: "Harry Potter and the chamber of secrets",
      originalTitle: "Harry Potter and the chamber of secrets",
      releaseDate: "Jul 2, 1998",
      description:
        "Harry Potter and the sophomores investigate a malevolent threat to their Hogwarts classmates, a menacing beast that hides within the castle.",
      pages: 251,
      cover:
        "https://raw.githubusercontent.com/fedeperin/potterapi/main/public/images/covers/2.png",
      index: 1,
    },
    {
      number: 3,
      title: "Harry Potter and the Prisoner of Azkaban",
      originalTitle: "Harry Potter and the Prisoner of Azkaban",
      releaseDate: "Jul 8, 1999",
      description:
        "Harry's third year of studies at Hogwarts is threatened by Sirius Black's escape from Azkaban prison. Apparently, it is a dangerous wizard who was an accomplice of Lord Voldemort and who will try to take revenge on Harry Potter.",
      pages: 317,
      cover:
        "https://raw.githubusercontent.com/fedeperin/potterapi/main/public/images/covers/3.png",
      index: 2,
    },
  ]);
});

module.exports = router;
