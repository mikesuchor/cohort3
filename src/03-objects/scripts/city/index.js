// getstuff.addEventListener('click', () => {
//     fetch('http://localhost:5000/all')
//         .then(response => response.json())
//         .then(json => console.log(json))
// });

// clearstuff.addEventListener('click', () => {
//     fetch('http://localhost:5000/clear')
//         .then(response => console.log(response));
// });

import { postData, Community } from './cityandcommunity.js';
import helpers from './helpers.js';

const communityController = new Community();
const cities = document.getElementById("cities");
const cityFunctions = document.getElementById("city-functions");
const cityFunctionsOutput = document.getElementById("city-functions-output");
const cityNameInput = document.getElementById("city-name-input");
const cityLatitudeInput = document.getElementById("city-latitude-input");
const cityLongitudeInput = document.getElementById("city-longitude-input");
const cityPopulationInput = document.getElementById("city-population-input");

document.addEventListener("click", () => {
    if(event.target.className === "add-city-button action-button") {
        // Refactor this
        let duplicate = false;
        for(var i = 0; i < communityController.communityList.length; i++) {
            if (communityController.communityList[i].name === cityNameInput.value) {
                duplicate = true;
            }
        }
        if(!duplicate) {
            communityController.createCity(cityNameInput.value, Number(cityLatitudeInput.value), Number(cityLongitudeInput.value), Number(cityPopulationInput.value));
            helpers.createCard(cityNameInput.value, cityLatitudeInput.value, cityLongitudeInput.value, cityPopulationInput.value, cities);
        }
        helpers.clearInputs(cityNameInput, cityLatitudeInput, cityLongitudeInput, cityPopulationInput);
        communityController.communityList.length > 1 ? cityFunctions.classList.remove("hidden") : cityFunctions.classList.add("hidden");
    }

    if(event.target.className === "fas fa-times") {
        communityController.deleteCity(event.target.parentNode.id);
        console.log(event.target.parentNode.key)
        helpers.removeCard(event.target.parentNode);
        console.log(communityController.communityList)
        communityController.communityList.length > 1 ? cityFunctions.classList.remove("hidden") : cityFunctions.classList.add("hidden");
    }

    if(event.target.className === "total-button action-button" || event.target.className === "fas fa-coins") {
        cityFunctionsOutput.innerHTML = `The total population in your cities is ${communityController.getPopulation()} people.`;
    }

    if(event.target.className === "north-button action-button" || event.target.className === "fas fa-long-arrow-alt-up") {
        const northernmostCity = communityController.getMostNorthern();
        cityFunctionsOutput.innerHTML = 
            `The northernmost city is ${northernmostCity.name} at latitude ${northernmostCity.latitude}.`;
    }

    if(event.target.className === "south-button action-button" || event.target.className === "fas fa-long-arrow-alt-down") {
        const southernmostCity = communityController.getMostSouthern();
        cityFunctionsOutput.innerHTML =
            `The southernmost city is ${southernmostCity.name} at latitude ${southernmostCity.latitude}.`;
    }

    if(event.target.className === "movedin-button action-button" || event.target.className === "fas fa-sign-in-alt") {
        const cityIndex = communityController.communityList.findIndex(x => x.name === event.target.parentNode.id);
        const inputPopulation = event.target.previousSibling;
        // Refactor this
        event.target.previousSibling.previousSibling.previousSibling.innerText = communityController.communityList[cityIndex].movedIn(Number(inputPopulation.value));
        inputPopulation.value = "";
    }

    if(event.target.className === "movedout-button action-button" || event.target.className === "fas fa-sign-out-alt") {
        const accountIndex = communityController.communityList.findIndex(x => x.name === event.target.parentNode.id);
        const inputPopulation = event.target.previousSibling.previousSibling;
        // Refactor this
        event.target.previousSibling.previousSibling.previousSibling.previousSibling.innerText = communityController.communityList[accountIndex].movedOut(inputPopulation.value);
        inputPopulation.value = "";
    }
});