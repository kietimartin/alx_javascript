#!/usr/bin/node

const req = require('request');

let count = 0;
const char_id = process.argv[2];
const searchQuery = `https://swapi.dev/api/people/${id}/`;
const url = 'https://swapi-api.alx-tools.com/api/films/';

req.get(url, function (body) {
    // parsing the JSON into an object
    const result = JSON.parse(body);

    for (i = 0, i in result.characters[i], i++) {
        if (result.characters[i] === searchQuery){
            count += 1;
        }
        else {
            count = count;
        }
        console.log(count);
    }
})