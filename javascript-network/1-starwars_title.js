#!/usr/bin/node

const req = require('request');
// the starwars api enpoind link
const id = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${id}`;

// the request function
req.get(url, {encoding: 'utf-8'})
    .on('data', data => {
        const result = JSON.parse(data);
        console.log(result.title);
    });