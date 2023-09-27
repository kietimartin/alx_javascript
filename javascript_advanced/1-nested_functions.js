#!usr/bin/node

const globalVariable = "Welcome";

function outer () {
  alert(globalVariable);
  const course = "Holberton";
  function inner () {
    alert(globalVariable + " " + course);
    const exclamation = "!";
    function inception () {
      alert(globalVariables + " " + course + exclamation);
    }
    inception
  }
  inner
}
outer