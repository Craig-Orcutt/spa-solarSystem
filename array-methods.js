var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var planetDiv = document.getElementById("planets");
var planetCap = document.getElementById('planetCap')
/*
Use the forEach method to add the name of each planet
to a div element in your HTML with an id of "planets".
*/

planets.forEach(planet =>{
     planetDiv.innerHTML += `${ planet } `;
});
// Use the map method to create a new array where the first letter of each planet is capitalized
let capPlanets = planets.map(planet =>
    planet.charAt(0).toUpperCase() + planet.slice(1)

)
planetCap.innerHTML = capPlanets;
// Use the filter method to create a new array that contains planets with the letter 'e'

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];