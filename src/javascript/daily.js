const functions = {

    assertEquals: (value1, value2) => {
        if(value1 === value2) return true;
        console.log(`*** the two values are not the same\np1--> ${value1}\np2--> ${value2}`);
        return false;
    },

    makeEmailArr: (arr) => {
        return arr.join('.').concat("@evolveu.ca").toLowerCase();
    },

    makeEmailObj: (obj) => {
        return `${obj.fname}.${obj.lname}@evolveu.ca`.toLowerCase();
    },

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
    }
}

export default functions;