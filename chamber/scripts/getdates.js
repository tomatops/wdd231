const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();
currentyear.innerHTML = today.getFullYear()

let month = today.getMonth();
let day = today.getDate();
let year = today.getFullYear();

let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

lastModified.innerHTML = `Last modified: ${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;