import { Community } from './cityandcommunity.js';
import fetchfunctions from './fetchfunctions.js'
import domhelpers from './domhelpers.js';

const community = new Community();
const cities = document.getElementById("cities");
const cityFunctions = document.getElementById("city-functions");
const cityFunctionsOutput = document.getElementById("city-functions-output");
const cityNameInput = document.getElementById("city-name-input");
const cityLatitudeInput = document.getElementById("city-latitude-input");
const cityLongitudeInput = document.getElementById("city-longitude-input");
const cityPopulationInput = document.getElementById("city-population-input");
let key = 0;

document.addEventListener('DOMContentLoaded', async () => {
    const data = await fetchfunctions.getAllCities();
    data.map((city) => {
        community.createCity(Number(city.key), city.name, Number(city.latitude), Number(city.longitude), Number(city.population));
        domhelpers.createCard(Number(city.key), city.name, city.latitude, city.longitude, city.population, cities);
    });
    community.communityList = data;
    key = community.getLastKey();
    community.communityList.length > 1 ? cityFunctions.classList.remove("hidden") : cityFunctions.classList.add("hidden");
});

document.addEventListener("click", () => {
    if(event.target.className === "add-city-button action-button") {
        // Refactor this
        let duplicate = false;
        for(var i = 0; i < community.communityList.length; i++) {
            if (community.communityList[i].name === cityNameInput.value) {
                duplicate = true;
            }
        }
        if(!duplicate && cityNameInput.value) {
            key++;
            const city = {key: Number(key), name: cityNameInput.value, latitude: Number(cityLatitudeInput.value), longitude: Number(cityLongitudeInput.value), population: Number(cityPopulationInput.value)};
            community.createCity(city);
            fetchfunctions.addCity(city);
            domhelpers.createCard(key, cityNameInput.value, cityLatitudeInput.value, cityLongitudeInput.value, cityPopulationInput.value, cities);
        }
        domhelpers.clearInputs(cityNameInput, cityLatitudeInput, cityLongitudeInput, cityPopulationInput);
        community.communityList.length > 1 ? cityFunctions.classList.remove("hidden") : cityFunctions.classList.add("hidden");
        console.log(community.communityList);
    }

    if(event.target.className === "clear-cities-button action-button") { 
        community.clearAllCities();
        fetchfunctions.clearAllCities();
        while (cities.firstChild) {
            cities.firstChild.remove();
        }
        cityFunctions.classList.add("hidden");
    }

    if(event.target.className === "fas fa-times") {
        community.deleteCity(event.target.parentNode.getAttribute("key"));
        fetchfunctions.deleteCity({key});
        domhelpers.removeCard(event.target.parentNode);
        community.communityList.length > 1 ? cityFunctions.classList.remove("hidden") : cityFunctions.classList.add("hidden");
    }

    if(event.target.className === "total-button action-button" || event.target.className === "fas fa-coins") {
        cityFunctionsOutput.innerHTML = `The total population in your cities is ${community.getPopulation()} people.`;
    }

    if(event.target.className === "north-button action-button" || event.target.className === "fas fa-long-arrow-alt-up") {
        const northernmostCity = community.getMostNorthern();
        cityFunctionsOutput.innerHTML = 
            `The northernmost city is ${northernmostCity.name} at latitude ${northernmostCity.latitude}.`;
    }

    if(event.target.className === "south-button action-button" || event.target.className === "fas fa-long-arrow-alt-down") {
        const southernmostCity = community.getMostSouthern();
        cityFunctionsOutput.innerHTML =
            `The southernmost city is ${southernmostCity.name} at latitude ${southernmostCity.latitude}.`;
    }

    if(event.target.className === "movedin-button action-button" || event.target.className === "fas fa-sign-in-alt") {
        const cityIndex = community.communityList.findIndex(x => x.name === event.target.parentNode.id);
        const inputPopulation = event.target.previousSibling;
        // Refactor this
        event.target.previousSibling.previousSibling.previousSibling.innerText = 
            community.communityList[cityIndex]
                .movedIn(community.communityList[cityIndex], Number(inputPopulation.value));
        inputPopulation.value = "";
    }

    if(event.target.className === "movedout-button action-button" || event.target.className === "fas fa-sign-out-alt") {
        const cityIndex = community.communityList.findIndex(x => x.name === event.target.parentNode.id);
        const inputPopulation = event.target.previousSibling.previousSibling;
        // Refactor this
        event.target.previousSibling.previousSibling.previousSibling.previousSibling.innerText = 
            community.communityList[cityIndex]
                .movedOut(community.communityList[cityIndex], Number(inputPopulation.value));
        inputPopulation.value = "";
    }
});