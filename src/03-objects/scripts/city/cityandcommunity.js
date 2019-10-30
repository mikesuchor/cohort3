class City {
    constructor(name, latitude, longitude, population) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
    }

    show() {
        return `Name: ${this.name}, Latitude: ${this.latitude}, Longitude: ${this.longitude}, Population: ${this.population}`;
    }

    movedIn(num) {
        return this.population + num;
    }

    movedOut(num) {
        return this.population - num;
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

    createCity(name, latitude, longitude, population) {
        this.communityList.push({name, latitude, longitude, population});
    }

    deleteCity(name) {
        this.communityList = this.communityList.filter((city) => {
            return (name !== city.name);
        })
    }
}

export { City, Community };