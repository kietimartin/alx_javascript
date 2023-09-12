#!/usr/bin/node

const myObject = {
  type: 'object',
  value: 12
};
console.log(myObject);
/*
YOUR CODE HERE
*/
exports.incr = function () {
    myObject.value++
};

myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);