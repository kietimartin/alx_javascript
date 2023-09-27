#!/usr/bin/node

const req = require('request');
// the starwars api enpoind link
const id = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${id}`;

// the request function
req.get(url, function (body, error) {
    
    const object = JSON.parse(body);
    console.log(object.title);

    if (error) {
        console.log(error);
    };
})