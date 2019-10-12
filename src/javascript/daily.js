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
    }
}

export default functions;