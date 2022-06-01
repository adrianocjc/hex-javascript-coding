#!/usr/bin/node
const argv = process.argv;
const url = 'https://swapi-api.hbtn.io/api/films/' + argv[2];
const request = require('request');

request(url, (err, response, body) => {
  if (err) console.log(err);
  JSON.parse(body).characters.map((i) => {
    request(i, (err, response, body) => {
      if (err) console.log(err);
      console.log(JSON.parse(body).name);
    });
  });
});
