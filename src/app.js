/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  const domains = document.getElementById("domains");

  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        const domainItem = document.createElement("li");
        domainItem.textContent = `${pronoun[p]}${adj[a]}${noun[n]}.com`;
        domains.appendChild(domainItem);
      }
    }
  }
};
