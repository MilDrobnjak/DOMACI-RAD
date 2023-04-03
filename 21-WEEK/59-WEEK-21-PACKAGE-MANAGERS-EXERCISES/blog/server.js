"use strict";

const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordPerSentence: {
    max: 16,
    min: 4,
  },
});

const title = lorem.generateWords(3);
const intro = lorem.generateSentences(2);

const posts = [
  {
    id: Math.floor(Math.random() * 10000 + 1),
    title: lorem.generateWords(3),
    intro: lorem.generateSentences(2),
  },
  {
    id: Math.floor(Math.random() * 10000 + 1),
    title: lorem.generateWords(3),
    intro: lorem.generateSentences(2),
  },
  {
    id: Math.floor(Math.random() * 10000 + 1),
    title: lorem.generateWords(3),
    intro: lorem.generateSentences(2),
  },
  {
    id: Math.floor(Math.random() * 10000 + 1),
    title: lorem.generateWords(3),
    intro: lorem.generateSentences(2),
  },
];

const http = require("http");

const hostname = "127.0.0.1";

const port = 5501;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  res.end(JSON.stringify(posts, null, 3));
});

server.listen(port, hostname, () => {
  console.log("Server running at http://" + hostname + ":" + port + "/");
});

// console.log(lorem.generateSentences(2));
// console.log(lorem.generateWords(3));
