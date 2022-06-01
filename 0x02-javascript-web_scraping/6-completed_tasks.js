#!/usr/bin/node
const argv = process.argv;
const url = argv[2];
const request = require('request');

request(url, (err, response, body) => {
  if (err) console.log(err);
  const bresponse = JSON.parse(body);
  const user = {};
  for (const i of bresponse) {
    if (i.completed === true) {
      if (user[i.userId] === undefined) {
        user[i.userId] = 0;
      }
      user[i.userId] += 1;
    }
  }
  console.log(user);
});
