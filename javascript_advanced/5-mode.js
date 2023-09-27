#!/usr/bin/node

function changeMode (size, weight, transform, background, color) {
    return () => {
      document.body.style.fontSize = size + "px";
      document.body.style.fontWeight = weight;
      document.body.style.textTransform = transform;
      document.body.style.backgroundColor = background;
      document.body.style.color = color; 
    }
}
  
function main () {
    const spooky = () => changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = () => changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = () => changeMode(12, "normal", "lowercase", "white", "black");
  
    const par = document.createElement("p");
    par.innerHTML = "Welcome Holberton!";
    document.body.appendChild(par);
  
    const bttnsp = document.createElement("button");
    bttnsp.addEventListener("click", spooky);
    bttnsp.innerText = "spooky";
    document.body.appendChild(bttnsp);
  
    const bttndar = document.createElement("button");
    bttndar.addEventListener("click", darkMode);
    bttndar.innerText = "Dark Mode";
    document.body.appendChild(bttndar);
  
    const bttnscrm = document.createElement("button");
    bttnscrm.addEventListener("click", screamMode);
    bttnscrm.innerText = "Scream Mode";
    document.body.appendChild(bttnscrm);
  
}
  
main();