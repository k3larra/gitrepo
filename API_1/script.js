const myHeading = document.querySelector("h1");
myHeading.textContent = "API lab 1.1";
// const texten = fetch("https://graph.facebook.com/v5.0/janedoe42?fields=id,name,email,picture");

fetch('https://graph.facebook.com/v5.0/janedoe42?fields=id,name,email,picture', {credentials: 'include'})
  .then((response) => response.json())
  .then((data) => console.log(data));
