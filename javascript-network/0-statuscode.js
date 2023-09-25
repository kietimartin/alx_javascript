#!/usr/bin/node

const req = required('request')

const url = argv[2];

req.get(url, function(response) {
    console.log('code: ' + response.statusCode)
});