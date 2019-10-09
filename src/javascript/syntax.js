const syntax = {
    // DEFINE ATTRIBUTES / VARIABLES
        // number
        testNumber: value => {
            if(!isNaN(value)) return true;
            return false; 
        },
        // string
        testString: value => {
            if(typeof(value) === "string") return true;
            return false;
        },
        // boolean
        testBoolean: value => {
            if(typeof(value) === "boolean") return true;
            return false;
        },
        // array
        testArray: value => {
            if(Array.isArray(value)) return true;
            return false;
        },

        // dictionary / objects
        testObject: value => {
            if(typeof(value) === "object") return true;
        },

        // undefined
        testUndefined: value => {
            if(value === undefined) return true;
        },

    // SAMPLE IF / ELSE
        testLessThan10: value => {
            if(value < 10) return true;
            return false;
        }

    // FUNCTIONS
        // parameters
        function add(num1, num2) {
            console.log(num1 + num2);
        }
        add(1, 2); // 3
        
        const subtract = (num1, num2) => {
            console.log(num1 - num2);
        }
        subtract(2, 1); //1

        // returns
        function multiply(num1, num2) {
            // return (num1 * num2);
        }

    // ARRAYS
        // add to the front
        numberArray.unshift(-1);
        console.log(numberArray); // [-1, 0, 1, 2]

        // add to the end
        numberArray.push(3);
        console.log(numberArray); // [-1, 0, 1, 2, 3]

        // update values
        numberArray[1] = 25;
        console.log(numberArray); // [-1, 25, 1, 2, 3]

    // LOOPS
        // for
        let total100 = 0;
        for(let i = 0; i <= 100; i++) {
            total100 += i;
        }
        console.log(total100);

        // for/in
        const myPets = {
            dog: "Grover",
            cat: "Fluffy",
            duck: "Quackers"
        }
        for (pet in myPets) {
            console.log(`${pet}'s name is ${myPets[pet]}`);
        }

        // while
        let i = 0;
        let total200 = 0;
        while(i <= 200) {
            total200 += i;
            i++;
        }
        console.log(total200);

        // do while
        i = 0;
        let total300 = 0;
        do {
            total300 += i;
            i++;
        } while (i <= 300);
        console.log(total300);

        // forEach (with array and function)


    // OBJECTS / DICTIONARIES
        // declare object
        // lookup key to retrieve value
}

export default syntaxTests;