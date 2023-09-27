#!/usr/bin/node

const req = require('request');

let count = 0;
const char_id = process.argv[2];
const searchQuery = `https://swapi.dev/api/people/${id}/`;
const url = 'https://swapi-api.alx-tools.com/api/films/';

req.get(url, function (body, error, response) {
    // parsing the JSON into an object
    if (error) {
        console.log(error);
    } else if (response.statusCode === 200) {
        const js_object = JSON.parse(body).results;
        const characterId = '18';
        const wedgeAntilles = js_object.filter(counter=>{
            return counter.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`);
        })
    } else {
        console.log('code:' +response.statusCode);
    }
});