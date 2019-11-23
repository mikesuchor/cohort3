// Three Ways of Functions Exercise of November 22, 2019

let myArray = [
    {num: 5,str: "apples", origin:"BC"},
    {num: 7,str: "oranges", origin:"Florida"},
    {num: 2,str: "lemons", origin:"Mexico"},
    {num: 8,str: "bananas", origin:"Ecuador"},
    {num: 6,str: "avocados", origin:"Mexico"},
    {num: 4,str: "pineapple", origin:"Brazil"},
    {num: 3,str: "blueberries", origin:"Chile"},
    {num: 9,str: "pears", origin:"Oregon"},
    {num: 1,str: "cantaloupe", origin:"California"}
];

// Anonymous Function for Sorting Numerically Ascending
export const sortNumberAsc = function(a, b) {
    return a.num - b.num;
};

// Named Function for Sorting Fruit Alphabetically in Ascending Order
export function sortFruitAsc(a, b) {
    if(a.str < b.str) return -1;
    if(a.str > b.str) return 1;
    return 0;
};

// Named Function for Sorting Origin Alphabetically in Descending Order
export const sortOriginDesc = (a, b) => {
    if(a.origin > b.origin) return -1;
    if(a.origin < b.origin) return 1;
    return 0;
};

myArray.sort(sortNumberAsc);
console.log("myArray Number Sorted = ", myArray);
myArray.sort(sortFruitAsc);
console.log("myArray Fruit Sorted = ", myArray);
myArray.sort(sortOriginDesc);
console.log("myArray Origin Sorted = ", myArray);

export const functions = {

    // Callback Exercise (Part 2) of November 21, 2019

    makePeopleObject: (peopleArr) => {
        const peopleObject = {
            totalPeople: functions.processPeople(peopleArr, functions.returnPerson).length,
            totalAge: functions.processPeople(peopleArr, functions.returnAge).reduce((total, age) => {
                return total += age;
            }, 0)
        }
        peopleObject.averageAge = Math.round((peopleObject.totalAge / peopleObject.totalPeople) * 100) / 100;
        return peopleObject;
    },

    returnPerson: (person) => person,
    returnAge: (person) => person.age,

    // Callback Exercise (Part 1) of November 8, 2019

    processPeople: (peopleArr, callback) => {
        const filteredPeople = [];
        for(let person of peopleArr) {
            if(person.province === "AB" || person.province === "BC") {
                filteredPeople.push(callback(person));
            }
        }
        return filteredPeople;
    },

    returnFullNames: (person) => `${person.fname} ${person.lname}`,

    // More Array Exercises (Really) of November 6, 2019

    balance1000: (staffArr) => {
        return staffArr.filter((person) => {
            return person.balance >= 1000;
        });
    },

    // More Array Exercises of October 29, 2019

    totalBalances: (staffArr) => {
        return staffArr.reduce((total, person) => {
            return total + person.balance;
        }, 0);
    },

    averageBalances: (staffArr) => {
        const total = staffArr.reduce((total, person) => {
            return total + person.balance;
        }, 0);
        return Math.round((total / staffArr.length) * 100) / 100;
    },

    // Loop Staff each/map of October 25, 2019

    loopStaffForEach: (staffArr) => {
        const newArr = [];
        staffArr.forEach((person) => {
            newArr.push(functions.makeEmailObj(person));
        });
        return newArr;
    },

    loopStaffMap: (staffArr) => {
        return staffArr.map((person) => {
            return functions.makeEmailObj(person);
        });
    },

    // Loop Staff in/of Daily Exercise of October 24, 2019

    loopStaffIn: (staffArr) => {
        const newArr = [];
        for (let person in staffArr) {
            newArr.push(functions.makeEmailObj(staffArr[person]));
        }
        return newArr;
    },

    loopStaffOf: (staffArr) => {
        const newArr = [];
        for(let person of staffArr) {
            newArr.push(functions.makeEmailObj(person));
        }
        return newArr;
    },

    // Loop Staff Daily Exercise of October 21, 2019

    loopStaff: (staffArr) => {
        const newArr = [];
        staffArr.forEach((staff) => {
            newArr.push(functions.makeEmailObj(staff));
        });
        return newArr;
    },

    // More Array Work Daily Exercise of October 16, 2019

    arrayMethods: {
        arraySlice: (arr, startIndex, endIndex) => {
            return arr.slice(startIndex, endIndex);
        },
        
        arraySplice: (arr, startIndex, numElements) => {
            arr.splice(startIndex, numElements, "spliced");
            return arr;
        },
        
        arrayForEach: (arr) => {
            let newArr = [];
            arr.forEach((element) => {
                newArr.push(element += "hi");
            })
            return newArr;
        },
        
        arrayMap: (arr) => {
            return arr.map((item) => {
                return item += "a";
            });
        },
        
        arrayReduce: (arr) => {
            return arr.reduce((sum, val) => {
                return sum + val;
            });
        },
        
        arrayFilter: (arr) => {
            return arr.filter((item) => {
                return item % 2;
            });
        },

        arraySort: (arr) => {
            return arr.sort((x, y) => {
                return x - y;
            });
        },
    },

    // Prepare for Array Work Daily Exercise of October 15, 2019
    
    prepArrayWork: {
        forLoop: (num) => {
            let total = 0;
            for(let i = 0; i <= num; i++) {
                total += i;
            }
            return(total);
        },

        whileLoop: (num) => {
            let i = 0;
            let total = 0;
            while(i <= num) {
                total += i;
                i++;
            }
            return total;
        },

        doWhileLoop: (num) => {
            let i = 0;
            let total = 0;
            do {
                total += i;
                i++;
            } while (i <= num);
            return total;
        },

        forInLoop: (obj) => {
            let allObjects = "";
            for (let key in obj) {
                allObjects += `Key: ${key} Value: ${obj[key]}\n`;
            }
            return allObjects;
        },

        forOfLoop: (collection) => {
            let combined = "";
            for (let item of collection) {
                combined += `${item} `;
            }
            return combined;
        }
    },

    // makeEmailObj Daily Exercise of October 11, 2019

    makeEmailObj: (obj) => {
        return `${obj.fname}.${obj.lname}@evolveu.ca`.toLowerCase();
    },

    // makeEmailArr Daily Exercise of October 9, 2019

    makeEmailArr: (arr) => {
        return arr.join('.').concat("@evolveu.ca").toLowerCase();
    },

    // AssertEquals Daily Exercise of October 7, 2019

    assertEquals: (value1, value2) => {
        if(value1 === value2) return true;
        // console.log(`*** the two values are not the same\np1--> ${value1}\np2--> ${value2}`);
        return false;
    }
}