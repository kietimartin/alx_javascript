#!/usr/bin/node

const req = require('request');

const url = process.argv[2];

req.get(url, {json: true },function(error, body, response) {
    if (error) {
        console.log(error);
        return;
    }

    const tasksComplete = {};
    body.forEach((todo) => {
        if (!tasksComplete[todo.userId]) {
            tasksComplete[todo.userId] = 1;
        } else {
            tasksComplete[todo.userId] += 1;
        }
    });
    console.log(tasksComplete);
})