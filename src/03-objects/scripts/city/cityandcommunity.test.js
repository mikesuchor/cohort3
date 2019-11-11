import { City, Community } from './cityandcommunity.js';

describe('city class methods', () => {
    test('show method', () => {
        const city = new City(1, 'Calgary', 51.0447, 114.0719, 1336000);
        expect(city.show()).toBe('Key: 1, Name: Calgary, Latitude: 51.0447, Longitude: 114.0719, Population: 1336000');
    });
    
    test('movedIn method', () => {
        const city = new City(1, 'Calgary', 51.0447, 114.0719, 1336000);
        expect(city.movedIn(city, -10)).toBe(1336000);
        expect(city.movedIn(city, 10000)).toBe(1346000);
    });

    test('movedOut method', () => {
        const city = new City(1, 'Calgary', 51.0447, 114.0719, 1336000);
        expect(city.movedOut(city, -10)).toBe(1336000);
        expect(city.movedOut(city, 10000)).toBe(1326000);
    });

    test('howBig method', () => {
        const city = new City(1, 'Calgary', 51.0447, 114.0719, 1336000);
        expect(city.howBig()).toBe('City');
        const largeTown = new City(2, 'Large Town', 12.3, 45.6, 25000);
        expect(largeTown.howBig()).toBe('Large Town');
        const town = new City(3, 'Town', 75.5, 65.1, 5000);
        expect(town.howBig()).toBe('Town');
        const village = new City(4, 'Village', 12.293, 34.123, 101);
        expect(village.howBig()).toBe('Village');
        const hamlet = new City(5, 'Hamlet', 64.5, 115.1, 17);
        expect(hamlet.howBig()).toBe('Hamlet');
        const nobody = new City(6, 'The Moon', 0, 0, 0);
        expect(nobody.howBig()).toBe('Nobody Lives Here');
    });
});

describe('community class methods', () => {
    test('getLastKey method', () => {
        const community = new Community;
        community.createCity(1, 'Calgary', 51.0447, 114.0719, 1336000);
        community.createCity(2, 'Edmonton', 53.5461, 113.4938, 981280);
        expect(community.getLastKey(community.communityList)).toBe(2);
        community.createCity(3, 'Buenos Aires', -34.35, 58.22, 2890000);
        expect(community.getLastKey(community.communityList)).toBe(3);
        community.createCity(0, 'Zeroville', 0, 0, 0);
        expect(community.getLastKey(community.communityList)).toBe(3);
    });

    test('whichSphere method', () => {
        const community = new Community;
        const city = new City(1, 'Calgary', 51.0447, 114.0719, 1336000);
        expect(community.whichSphere(city)).toBe('Northern Hemisphere');
        const city1 = new City(2, 'Buenos Aires', -34.35, 58.22, 2890000);
        expect(community.whichSphere(city1)).toBe('Southern Hemisphere');
        const city2 = new City(3, 'Middleville', 0, 0, 5000);
        expect(community.whichSphere(city2)).toBe('Equator');
    });

    test('getMostNorthern method', () => {
        const community = new Community;
        community.createCity(1, 'Calgary', 51.0447, 114.0719, 1336000);
        community.createCity(2, 'Edmonton', 53.5461, 113.4938, 981280);
        community.createCity(3, 'Buenos Aires', -34.35, 58.22, 2890000);
        community.createCity(4, 'Hammerfest', 70.38, 23.38, 10287);
        expect(community.getMostNorthern()).toEqual({'key': 4, 'latitude': 70.38, 'longitude': 23.38, 'name': 'Hammerfest', 'population': 10287});
    });

    test('getMostSouthern method', () => {
        const community = new Community;
        community.createCity(1, 'Calgary', 51.0447, 114.0719, 1336000);
        community.createCity(2, 'Edmonton', 53.5461, 113.4938, 981280);
        community.createCity(3, 'Buenos Aires', -34.35, 58.22, 2890000);
        community.createCity(4, 'Hammerfest', 70.38, 23.38, 10287);
        expect(community.getMostSouthern()).toEqual({'key': 3, 'latitude': -34.35, 'longitude': 58.22, 'name': 'Buenos Aires', 'population': 2890000});
    });

    test('getPopulation method', () => {
        const community = new Community;
        community.createCity(1, 'Calgary', 51.0447, 114.0719, 1336000);
        community.createCity(1, 'Edmonton', 53.5461, 113.4938, 981280);
        expect(community.getPopulation()).toBe(1336000 + 981280);
    });

    test('createCity method', () => {
        const community = new Community;
        community.createCity(1, 'Calgary', 51.0447, 114.0719, 1336000);
        expect(community.communityList)
            .toEqual([{'key': 1, 'latitude': 51.0447, 'longitude': 114.0719, 'name': 'Calgary', 'population': 1336000}]);
    });

    test('deleteCity method', () => {
        const community = new Community;
        community.createCity(1, 'Calgary', 51.0447, 114.0719, 1336000);
        community.createCity(2, 'Edmonton', 53.5461, 113.4938, 981280);
        community.createCity(3, 'Buenos Aires', -34.35, 58.22, 2890000);
        expect(community.communityList)
            .toEqual([{'key': 1, 'latitude': 51.0447, 'longitude': 114.0719, 'name': 'Calgary', 'population': 1336000},
                      {'key': 2, 'latitude': 53.5461, 'longitude': 113.4938, 'name': 'Edmonton', 'population': 981280},
                      {'key': 3, 'latitude': -34.35, 'longitude': 58.22, 'name': 'Buenos Aires', 'population': 2890000}]);
        community.deleteCity('2');
        expect(community.communityList)
            .toEqual([{'key': 1, 'latitude': 51.0447, 'longitude': 114.0719, 'name': 'Calgary', 'population': 1336000},
                      {'key': 3, 'latitude': -34.35, 'longitude': 58.22, 'name': 'Buenos Aires', 'population': 2890000}]);
    });

    test('clearAllCities method', () => {
        const community = new Community;
        community.createCity(1, 'Calgary', 51.0447, 114.0719, 1336000);
        community.createCity(2, 'Edmonton', 53.5461, 113.4938, 981280);
        community.createCity(3, 'Buenos Aires', -34.35, 58.22, 2890000);
        community.clearAllCities();
        expect(community.communityList).toEqual([]);
    });
});