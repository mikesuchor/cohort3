import { Community } from './cityandcommunity.js';
import domhelpers from './domhelpers.js';

const url = 'http://localhost:5000/';

const fetchfunctions = {

    async postData(url, data) {
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
        return json;
    },

    async addCity(city) {
        await this.postData(url + 'add', city);
    },

    async deleteCity(key) {
        await this.postData(url + 'delete', key);
    },

    async updateCity(city) {
        await this.postData(url + 'update', city);
    },

    async getAllCities() {
        return await this.postData(url + 'all');
    },

    async clearAllCities() {
        await this.postData(url + 'clear');
    }
}

export default fetchfunctions;