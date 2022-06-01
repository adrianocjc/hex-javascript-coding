#!/usr/bin/node
const argv = process.argv;
const url = argv[2];
const request = require('request');

request(url, (err, response, body) => {
  if (err) console.log(err);
  console.log('code:', response && response.statusCode);
});
