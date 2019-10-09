import { endianness } from "os";

const syntax = {
    // DEFINE ATTRIBUTES / VARIABLES
        // number
        testNumber: value => {
            if(!isNaN(value)) return `${value} is a number`;
            return `${value} is not a number`;
        },
        // string
        testString: value => {
            if(typeof(value) === "string") return `${value} is a string`;
            return `${value} is not a string`;
        },
        // boolean
        testBoolean: value => {
            if(typeof(value) === "boolean") return `${value} is a boolean`;
            return `${value} is not a boolean`;
        },
        // array
        testArray: value => {
            if(Array.isArray(value)) return "Array";
            return `${value} is not an array`;
        },

        // dictionary / objects
        testObject: value => {
            if(typeof(value) === "object") return "Object";
            return `${value} is not an object`;
        },

        // undefined
        testUndefined: value => {
            if(value === undefined) return `${value} is undefined`;
            return `${value} is not undefined`;
        },

    // SAMPLE IF / ELSE
        testIfElse: value => {
            if(value < 10) return `${value} is less than 10`;
            return `${value} is 10 or more`;
        },

    // FUNCTIONS
        // parameters
        testParameters: (parameter1, parameter2) => {
            return `The paramaters are ${parameter1} & ${parameter2}`;
        },

        // returns
        testReturns: (parameter1, parameter2) => {
            return `This function is returning ${parameter1} & ${parameter2}`;
        },

    // ARRAYS
        // add to the front
        testUnshift: (arr) => {
            if(Array.isArray(arr)) {
                arr.unshift("hello");
                return arr;
            }
            return "Not an array";
        },

        // add to the end
        testPush: (arr) => {
            if(Array.isArray(arr)) {
                arr.push("hello");
                return arr;
            }
            return "Not an array";
        },

        // update values
        testUpdateArray: (arr) => {
            if(Array.isArray(arr)) {
                arr[0] = "updated";
                return arr;
            }
            return "Not an array";
        },

    // LOOPS
        // for
        testForLoop: (num) => {
            if(typeof(num) === "number") {
                let total = 0;
                for(let i = 0; i <= num; i++) {
                    total += i;
                }
                return(total);
            }
            return "Not a number";
        },

        // for/in
        testForIn: (obj) => {
            let allObjects = "";
            for (let key in obj) {
                allObjects += `Key: ${key} Value: ${obj[key]}\n`;
            }
            return allObjects;
        },

        // while
        testWhile: (num) => {
            if(typeof(num) === "number") {
                let i = 0;
                let total = 0;
                while(i <= num) {
                    total += i;
                    i++;
                }
                return total;
            }
            return "Not a number";
        },

        // do while
        testDoWhile: (num) => {
            if(typeof(num) === "number") {
                let i = 0;
                let total = 0;
                do {
                    total += i;
                    i++;
                } while (i <= num);
                return total;
            }
            return "Not a number";
        },

        // forEach (with array and function)
        testForEach: (arr) => {
            if(Array.isArray(arr)) {
                let newArr = [];
                arr.forEach((element) => {
                    newArr.push(element += "hi");
                })
                return newArr;
            }
            return "Not an array";
        },

    // OBJECTS / DICTIONARIES
        // declare object
        testDeclareObject: () => {
            const myPets = {
                dog: "Grover",
                cat: "Fluffy",
                duck: "Quackers"
            }
            return myPets;
        },

        // lookup key to retrieve value
        testLookupKey: () => {
            const myPets = {
                dog: "Grover",
                cat: "Fluffy",
                duck: "Quackers"
            }
            return(myPets.duck);
        }

}

export default syntax;