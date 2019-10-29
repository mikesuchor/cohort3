import { City, Community } from './cityandcommunity.js';

describe('city class methods', () => {
    test('show method', () => {
        const city = new City('Calgary', 51.0447, 114.0719, 1336000);
        expect(city.show()).toBe('Name: Calgary, Latitude: 51.0447, Longitude: 114.0719, Population: 1336000');
    });
    
    test('movedIn method', () => {
        const city = new City('Calgary', 51.0447, 114.0719, 1336000);
        expect(city.movedIn(10000)).toBe(1346000);
    });

    test('movedOut method', () => {
        const city = new City('Calgary', 51.0447, 114.0719, 1336000);
        expect(city.movedOut(10000)).toBe(1326000);
    });

    test('howBig method', () => {
        const city = new City('Calgary', 51.0447, 114.0719, 1336000);
        expect(city.howBig()).toBe('City');
        const largeTown = new City('Large Town', 12.3, 45.6, 25000);
        expect(largeTown.howBig()).toBe('Large Town');
        const town = new City('Town', 75.5, 65.1, 5000);
        expect(town.howBig()).toBe('Town');
        const village = new City('Village', 12.293, 34.123, 101);
        expect(village.howBig()).toBe('Village');
        const hamlet = new City('Hamlet', 64.5, 115.1, 17);
        expect(hamlet.howBig()).toBe('Hamlet');
        const nobody = new City('The Moon', 0, 0, 0);
        expect(nobody.howBig()).toBe('Nobody Lives Here');
    });
});

describe('community class methods', () => {
    test('whichSphere method', () => {
        const community = new Community;
        expect(community.whichSphere(cityName)).toBe(1);
    });

    test('getMostNorthern method', () => {
        const community = new Community;
        expect(community.getMostNorthern()).toBe(1);
    });

    test('getMostSouthern method', () => {
        const community = new Community;
        expect(community.getMostSouthern()).toBe(1);
    });

    test('getPopulation method', () => {
        const community = new Community;
        community.createCity('Calgary', 51.0447, 114.0719, 1336000);
        community.createCity('Edmonton', 53.5461, 113.4938, 981280);
        expect(community.getPopulation()).toBe(1336000 + 981280);
    });

    test('createCity method', () => {
        const community = new Community;
        community.createCity('Calgary', 51.0447, 114.0719, 1336000);
        expect(community.communityList)
            .toEqual([{'latitude': 51.0447, 'longitude': 114.0719, 'name': 'Calgary', 'population': 1336000}]);
    });

    test('deleteCity method', () => {
        const community = new Community;
        expect(community.deleteCity(name)).toBe(1);
    });
});