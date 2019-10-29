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
        const city = new City('Calgary', 51.0447, 114.0719, 1336000);
        expect(community.whichSphere(city)).toBe('Northern Hemisphere');
        const city1 = new City('Buenos Aires', -34.35, 58.22, 2890000);
        expect(community.whichSphere(city1)).toBe('Southern Hemisphere');
        const city2 = new City('Middleville', 0, 0, 5000);
        expect(community.whichSphere(city2)).toBe('Equator');
    });

    test('getMostNorthern method', () => {
        const community = new Community;
        community.createCity('Calgary', 51.0447, 114.0719, 1336000);
        community.createCity('Edmonton', 53.5461, 113.4938, 981280);
        community.createCity('Buenos Aires', -34.35, 58.22, 2890000);
        community.createCity('Hammerfest', 70.38, 23.38, 10287);
        expect(community.getMostNorthern()).toEqual({'latitude': 70.38, 'longitude': 23.38, 'name': 'Hammerfest', 'population': 10287});
    });

    test('getMostSouthern method', () => {
        const community = new Community;
        community.createCity('Calgary', 51.0447, 114.0719, 1336000);
        community.createCity('Edmonton', 53.5461, 113.4938, 981280);
        community.createCity('Buenos Aires', -34.35, 58.22, 2890000);
        community.createCity('Hammerfest', 70.38, 23.38, 10287);
        expect(community.getMostSouthern()).toStrictEqual({'latitude': -34.35, 'longitude': 58.22, 'name': 'Buenos Aires', 'population': 2890000});
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
        community.createCity('Calgary', 51.0447, 114.0719, 1336000);
        community.createCity('Edmonton', 53.5461, 113.4938, 981280);
        community.createCity('Buenos Aires', -34.35, 58.22, 2890000);
        expect(community.communityList)
            .toEqual([{'latitude': 51.0447, 'longitude': 114.0719, 'name': 'Calgary', 'population': 1336000},
                      {'latitude': 53.5461, 'longitude': 113.4938, 'name': 'Edmonton', 'population': 981280},
                      {'latitude': -34.35, 'longitude': 58.22, 'name': 'Buenos Aires', 'population': 2890000}]);
        community.deleteCity('Edmonton');
        expect(community.communityList)
            .toEqual([{'latitude': 51.0447, 'longitude': 114.0719, 'name': 'Calgary', 'population': 1336000},
                      {'latitude': -34.35, 'longitude': 58.22, 'name': 'Buenos Aires', 'population': 2890000}]);
    });
});