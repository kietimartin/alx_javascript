#!/usr/bin/node
const myObject = {
    type: 'object',
    value: 12
  };
  console.log(myObject);
  /*
  YOUR CODE HERE
  */
function incr (value) {
    myObject.value = value;
    value += 1;
    return value
};

  myObject.incr();
  console.log(myObject);
  myObject.incr();
  console.log(myObject);
  myObject.incr();
  console.log(myObject);