#!/usr/bin/node

function addMeMaybe (number, theFunction) {
    return theFunction(number + 1);
};

exports.addMeMaybe = addMeMaybe;