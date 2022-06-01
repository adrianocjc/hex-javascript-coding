#!/usr/bin/node
const argv = process.argv;
const id = '18';
const url = argv[2];
const request = require('request');
request(url, (err, response, body) => {
  if (err) console.log(err);
  const bresponse = JSON.parse(body).results;
  let count = 0;
  for (const i of bresponse) {
    for (const j of i.characters) {
      if (j.search(id) > 0) {
        count++;
      }
    }
  }
  console.log(count);
});
