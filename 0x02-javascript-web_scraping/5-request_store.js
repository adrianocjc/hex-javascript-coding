#!/usr/bin/node
const fs = require('fs');
const argv = process.argv;
const url = argv[2];
const file = argv[3];
const request = require('request');
request(url, (err, response, body) => {
  if (err) console.log(err);
  try {
    fs.writeFile(file, body, 'utf8');
  } catch (err) {
    return console.error(err);
  }
});
