global.fetch = require('node-fetch');

import fetchfunctions from './fetchfunctions.js';

const url = 'http://localhost:5000/';

describe('test fetch functions', () => {
    beforeEach(async () => {
        await fetchfunctions.addCity({key: 1, name: 'Calgary', latitude: 51.0447, longitude: 114.0719, population: 1336000});
        await fetchfunctions.addCity({key: 2, name: 'Edmonton', latitude: 53.5461, longitude: 113.4938, population: 981280});
    });
    
    afterEach(async () => {
        await fetchfunctions.clearAllCities();
    });

    test('postData method is working', async () => {
        expect(await fetchfunctions.postData(url + 'clear')).toEqual({});
    });

    test('add a city', async () => {
        await fetchfunctions.addCity({key: 3, name: 'Buenos Aires', latitude: -34.35, longitude: 58.22, population: 2890000});
        expect(await fetchfunctions.getAllCities())
            .toEqual([{key: 1, name: 'Calgary', latitude: 51.0447, longitude: 114.0719, population: 1336000},
                      {key: 2, name: 'Edmonton', latitude: 53.5461, longitude: 113.4938, population: 981280},
                      {key: 3, name: 'Buenos Aires', latitude: -34.35, longitude: 58.22, population: 2890000}]);
    });

    test('delete a city', async () => {
        await fetchfunctions.deleteCity({key: 2});
        expect(await fetchfunctions.getAllCities())
            .toEqual([{key: 1, name: 'Calgary', latitude: 51.0447, longitude: 114.0719, population: 1336000}]);
    });

    test('update a city', async () => {
        await fetchfunctions.updateCity({key: 1, name: 'Cowtown', latitude: 51.0447, longitude: 114.0719, population: 1000});
        expect(await fetchfunctions.getAllCities())
            .toEqual([{key: 1, name: 'Cowtown', latitude: 51.0447, longitude: 114.0719, population: 1000},
                      {key: 2, name: 'Edmonton', latitude: 53.5461, longitude: 113.4938, population: 981280}]);
    });

    test('get all cities', async () => {
        expect(await fetchfunctions.getAllCities())
            .toEqual([{key: 1, name: 'Calgary', latitude: 51.0447, longitude: 114.0719, population: 1336000},
                      {key: 2, name: 'Edmonton', latitude: 53.5461, longitude: 113.4938, population: 981280}]);
    });

    test('clear all cities', async () => {
        await fetchfunctions.clearAllCities();
        expect(await fetchfunctions.getAllCities()).toEqual([]);
    });
});