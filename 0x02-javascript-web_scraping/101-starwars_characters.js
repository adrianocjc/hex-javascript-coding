#!/usr/bin/node
const argv = process.argv;
const id = argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/' + id;
const request = require('request');
request(url, (err, response, body) => {
  if (err) console.log(err);
  const characters = JSON.parse(body).characters;
  printCharacters(characters, 0);
});

const printCharacters = (characters, i) => {
  request(characters[i], (err, response, body) => {
    if (err) console.log(err);
    console.log(JSON.parse(body).name);
    if (i + 1 < characters.length) {
      printCharacters(characters, i + 1);
    }
  });
};
