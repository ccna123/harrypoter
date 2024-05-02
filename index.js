const { default: axios } = require("axios");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send({
    mess: "Success",
  });
});

app.get("/getAllChar", async (req, res) => {
  return (
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
    }
  );
});
app.get("/getAllSpells", async (req, res) => {
  return (
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
    }
  );
});
app.get("/getAllBooks", async (req, res) => {
  return (
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
    }
  );
});

app.listen("4000", (req, res) => {
  console.log("Server listening on port 4000");
});
