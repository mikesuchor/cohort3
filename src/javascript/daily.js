const functions = {

    assertEquals: (value1, value2) => {
        if(value1 === value2) return true;
        console.log("*** the two values are not the same")
        console.log(`p1--> ${value1}`);
        console.log(`p2--> ${value2}`);
        return false;
    },

    makeEmailArr: (arr) => {
        return arr.join('.').concat("@evolveu.ca").toLowerCase();
    }
}

export default functions;