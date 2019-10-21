const functions = {

    // Loop Staff Daily Exercise of October 21, 2019

    loopStaff: (staffArr) => {
        const newArr = [];
        staffArr.forEach((staff) => {
            return newArr.push(functions.makeEmailObj(staff));
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
        console.log(`*** the two values are not the same\np1--> ${value1}\np2--> ${value2}`);
        return false;
    }
}

export default functions;