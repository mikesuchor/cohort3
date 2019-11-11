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

    // Commenting out as these only write to the console and don't need to be tested
    // showDelayProblem() {
    //     console.log('One');
    //     // Simulates a fetch
    //     setTimeout(() => {          
    //         console.log("Two");
    //     }, 1 * 1000);
    //     // We have a problem Huston
    //     console.log('Three');
    // },

    // async showDelaySolution() {
    //     console.log('One');
    //     try {
    //         // Simulate fetch
    //         console.log(await new Promise((resolve, reject) => 
    //             setTimeout(() => resolve("Two"), 2000)));
    //     } catch (error) {
    //         console.log(error);
    //     }
    //     console.log('Three');
    // },

    // async getUsers() {
    //     try {
    //         const response = await fetch(functions.url);
    //         const data = await response.json();
    //         return data;
    //     } catch (error) {
    //         console.error('Error:', error);
    //         throw (error);
    //     }
    // },

    // async workWithData(done) {
    //     const data = await functions.getUsers();
    //     console.log(functions.getFirstName(data));
    //     console.log(functions.getAllFirstNames(data));
    // }
}

export default functions;