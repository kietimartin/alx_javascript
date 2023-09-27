#!/usr/bin/node

const req = require('request');
const fs = require('fs');

const url = process.argv[2];
const store = process.argv[3];

req.get(url, {encoding:'utf-8'})
    .pipe(fs.createWriteStream(store));
