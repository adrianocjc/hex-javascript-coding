#!/usr/bin/node
const fs = require('fs');
const argv = process.argv;
const file = argv[2];
const text = argv[3];

try {
  fs.writeFile(file, text) 
} catch (err) {
  console.log(err);
}
