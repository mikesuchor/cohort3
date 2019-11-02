import helpers from './helpers.js';

async function postData(url = '', data = {}) {
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
}

class City {
    constructor(key, name, latitude, longitude, population) {
        this.key = key;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
    }

    show() {
        return `Key: ${this.key}, Name: ${this.name}, Latitude: ${this.latitude}, Longitude: ${this.longitude}, Population: ${this.population}`;
    }

    movedIn(city, num) {
        if(num < 0) return this.population;
        city.population += num;
        postData('http://localhost:5000/update', city);
        return city.population;
    }

    movedOut(city, num) {
        if(num < 0) return this.population;
        city.population -= num;
        postData('http://localhost:5000/update', city);
        return city.population;
    }

    howBig() {
        if(this.population > 100000) return "City";
        if(this.population > 20000) return "Large Town";
        if(this.population > 1000) return "Town";
        if(this.population > 100) return "Village";
        if(this.population > 0) return "Hamlet";
        return "Nobody Lives Here";
    }
}

class Community {
    constructor() {
        this.communityList = [];
    }

    getLastKey() {
        fetch('http://localhost:5000/all')
            .then(request => request.json())
            .then((data) => {
                const test = data.reduce((acc, city) => {
                    return acc > city.key ? acc : city.key;
                }, 1)
                console.log(test);
            })
    }

    whichSphere(city) {
        if(city.latitude > 0) return "Northern Hemisphere";
        if(city.latitude < 0) return "Southern Hemisphere";
        return "Equator";
    }

    getMostNorthern() {
        return this.communityList.reduce((northern, city) => {
            return (city.latitude > northern.latitude) ? city : northern;
        });
    }

    getMostSouthern() {
        return this.communityList.reduce((southern, city) => {
            return (city.latitude < southern.latitude) ? city : southern;
        });
    }

    getPopulation() {
        return this.communityList.reduce((total, city) => {
            return total + city.population;
        }, 0);
    }

    createCity(key, name, latitude, longitude, population) {
        const city = new City(key, name, latitude, longitude, population);
        this.communityList.push(city);
        postData('http://localhost:5000/add', city);
    }

    deleteCity(key) {
        key = Number(key);
        this.communityList = this.communityList.filter((city) => {
            return (key !== city.key);
        })
        postData('http://localhost:5000/delete', {key});
    }

    deleteAllCities() {
        this.communityList = [];
        fetch('http://localhost:5000/clear');
    }

    getAllCities() {
        fetch('http://localhost:5000/all')
        .then(request => request.json())
        .then(data => {
            data.map((city) => {
                this.createCity(Number(city.key), city.name, Number(city.latitude), Number(city.longitude), Number(city.population));
                helpers.createCard(city.name, city.latitude, city.longitude, city.population, cities);
            });
        })
    }
}

export { postData, City, Community };