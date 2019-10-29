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

    whichSphere(cityName) {
        return 1;
    }

    getMostNorthern() {
        return 1;
    }

    getMostSouthern() {
        return 1;
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
        return 1;
    }
}

export { City, Community };