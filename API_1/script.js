const myHeading = document.querySelector("h1");
myHeading.textContent = "API lab 1.1";
// const texten = fetch("https://graph.facebook.com/v5.0/janedoe42?fields=id,name,email,picture");

/* const animals = fetch('animals.json', {credentials: 'include'})
  .then((response) => response.json())
  .then((data) => console.log(data));
const jane = fetch('jane.json', {credentials: 'include'})
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    showJane(data)
}); 

function showJane(data){
    console.log("this",data.getElementById)
    var text_1 = document.getElementById("maintext");
    text_1.textContent = data.id;
} */


/* fetch('https://cat-fact.herokuapp.com/facts', {credentials: 'include'})
  .then((response) => response.json())
  .then((data) => console.log(data)); */

//const url = "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=??";
const url = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=??"
fetch(url)
.then((response) => {
    return response.json();
}).then((data) => {
    showWeather(data)
});

function showWeather(data){
    console.log(data)
    console.log(data.main.temp)
    console.log(data.weather[0].description)
    var text_1 = document.getElementById("maintext");
    text_1.textContent = "Town: "+data.name+" Weather: "+data.weather[0].description;
}
