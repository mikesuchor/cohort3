/*	
	Write the function that will create this output:

*** the two values are not the same:
    p1--> a
    p2--> b
*** the two values are not the same:
    p1--> 1
    p2--> 2
*** the two values are the same:
    p1--> 2
    p2--> 2
*/


const functions = {

// Write the function after this comment ---
    assertEquals: (value1, value2) => {
        if(value1 === value2) return true;
        console.log("*** the two values are not the same")
        console.log(`p1--> ${value1}`);
        console.log(`p2--> ${value2}`);
        return false;
    },

// and before this comment ---

    makeEmailArr: (arr) => {
        return arr.join('.').concat("@evolveu.ca").toLowerCase()
    }
}

export default functions;