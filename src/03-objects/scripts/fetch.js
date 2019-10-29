const me = { 
    "name": "Michael", 
    "surname": "Suchorolski", 
    "gender": "male", 
    "region": "Canada" 
};

console.log(me);

const sMe = JSON.stringify(me);
console.log(sMe);

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST',     // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',       // no-cors, *cors, same-origin
        cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',         // manual, *follow, error
        referrer: 'no-referrer',    // no-referrer, *client
        body: JSON.stringify(data)  // body data type must match "Content-Type" header
    });
    return await response.json();   // parses JSON response into native JavaScript objects
}


const functions = {
    url: 'https://uinames.com/api/?amount=10',

    getFirstName(data) {
        return data[0].name;
    },

    getAllFirstNames(data) {
        return data.map((person) => {
            return person.name;
        })
    },

    showDelayProblem() {
        console.log('One');
        // Simulates a fetch
        setTimeout(() => {          
            console.log("Two");
        }, 1 * 1000);
        // We have a problem Huston
        console.log('Three');
    },

    async showDelaySolution() {
        console.log('One');
        try {
            // Simulate fetch
            console.log(await new Promise((resolve, reject) => 
                setTimeout(() => resolve("Two"), 2000)));
        } catch (error) {
            console.log(error);
        }
        console.log('Three');
    },

    async getUsers() {
        try {
            const response = await fetch(functions.url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw (error);
        }
    },

    async workWithData(done) {
        const data = await functions.getUsers();
        console.log(functions.getFirstName(data));
        console.log(functions.getAllFirstNames(data));
    }
}

functions.getUsers();

// export default functions;