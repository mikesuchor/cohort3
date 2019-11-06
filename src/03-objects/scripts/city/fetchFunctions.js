import { Community } from './city.js';
import helpers from './helpers.js';

const communityController = new Community();

const fetchFunctions = {
    async postData(url = '', data = {}) {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify(data)
        });
        const json = await response.json();
        json.status = response.status;
        json.statusText = response.statusText;
        return json;
    },

    getAllCities() {
        fetch('http://localhost:5000/all')
        .then(request => request.json())
        .then(data => {
            data.map((city) => {
                communityController.createCity(Number(city.key), city.name, Number(city.latitude), Number(city.longitude), Number(city.population));
                helpers.createCard(Number(city.key), city.name, city.latitude, city.longitude, city.population, cities);
            });
        })
        .then(() => console.log(communityController.communityList));
    },

    clearAllCities() {
        fetch('http://localhost:5000/clear');
    }
}

export default fetchFunctions;