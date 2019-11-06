import functions from './daily';

/*
    Sample data for the next few exercises.
*/

const data = {
    staff: [
        { fname: "Jane", lname: "Smith", balance: 10 },
        { fname: "Liam", lname: "Henry", balance: 1000 },
        { fname: "Emma", lname: "Jones", balance: 1330 },
        { fname: "Olivia", lname: "Notly", balance: 310 },
        { fname: "Noah", lname: "Ho", balance: 503 },
        { fname: "William", lname: "Lee", balance: 520 },
        { fname: "Benjamin", lname: "Amis", balance: 150 },
    ],
    company: "EvolveU",
    city: "Calgary",
    prov: "Alberta"
};

// More Array Exercises (Really) of November 6, 2019

test('staff with balance >=1000', () => {
    expect(functions.balance1000(data.staff))
        .toEqual([{ fname: "Liam", lname: "Henry", balance: 1000 }, { fname: "Emma", lname: "Jones", balance: 1330 }]);
});

// More Array Exercises of October 29, 2019

test('staff total balances', () => {
    expect(functions.totalBalances(data.staff)).toBe(3823);
});

test('staff average balances', () => {
    expect(functions.averageBalances(data.staff)).toBe(546.14);
});

// Loop Staff each/map of October 25, 2019

test('email builder for company using forEach', () => {
    const staffEmail = functions.loopStaffForEach(data.staff);
    expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
});

test('email builder for company using map', () => {
    const staffEmail = functions.loopStaffMap(data.staff);
    expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
});

// Loop Staff in/of Daily Exercise of October 24, 2019

test('email builder for company using for in', () => {
    const staffEmail = functions.loopStaffIn(data.staff);
    expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
});

test('email builder for company using for of', () => {
    const staffEmail = functions.loopStaffOf(data.staff);
    expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
});

// Loop Staff Daily Exercise of October 21, 2019

/*	
	Write the function to build email addresses for the company.
*/

test('email builder for company', () => {  
    const staffEmail = functions.loopStaff(data.staff);
    expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
});

// More Array Work Daily Exercise of October 16, 2019

test('example of an array slice', () => {
    const arr = [0, 1, 2, 3, 4, 5];
    expect(functions.arrayMethods.arraySlice(arr, 0, 1)).toEqual([0]);
    expect(functions.arrayMethods.arraySlice(arr, 1, 3)).toEqual([1, 2]);
    expect(functions.arrayMethods.arraySlice(arr, 4, 6)).toEqual([4, 5]);
});

test('example of an array splice', () => {
    const arr = [0, 1, 2, 3, 4, 5];
    expect(functions.arrayMethods.arraySplice(arr, 3, 1)).toEqual([0, 1, 2, "spliced", 4, 5]);
    expect(functions.arrayMethods.arraySplice(arr, 1, 3)).toEqual([0, "spliced", 4, 5]);
});

test('example of an array forEach', () => {
    const arr = [0, 1, 2];
    expect(functions.arrayMethods.arrayForEach([0, 1, 2])).toEqual(["0hi", "1hi", "2hi"]);
});

test('example of an array map', () => {
    const arr = [0, 1, 2, 3, 4, 5];
    expect(functions.arrayMethods.arrayMap(arr)).toEqual(["0a", "1a", "2a", "3a", "4a", "5a"]);
});

test('example of an array reduce', () => {
    const arr = [0, 1, 2, 3, 4, 5];
    expect(functions.arrayMethods.arrayReduce(arr)).toBe(15);
    expect(functions.arrayMethods.arrayReduce(arr.slice(3, 6))).toBe(12);
});

test('example of an array filter', () => {
    const arr = [0, 1, 2, 3, 4, 5];
    expect(functions.arrayMethods.arrayFilter(arr)).toEqual([1, 3, 5]);
});

test('example of an array sort', () => {
    const basicArr = [0, 5, 3, 4, 1, 2];
    const normalArr = [0, 5, 3, 34, 18, 1, 7];
    expect(functions.arrayMethods.arraySort(basicArr)).toEqual([0, 1, 2, 3, 4, 5]);
    expect(functions.arrayMethods.arraySort(normalArr)).toEqual([0, 1, 3, 5, 7, 18, 34]);
});

// Prepare for Array Work Daily Exercise of October 15, 2019

test('example of for loop', () => {
    expect(functions.prepArrayWork.forLoop(0)).toBe(0);
    expect(functions.prepArrayWork.forLoop(5)).toBe(15);
    expect(functions.prepArrayWork.forLoop(100)).toBe(5050);
});

test('example of while loop', () => {
    expect(functions.prepArrayWork.whileLoop(0)).toBe(0);
    expect(functions.prepArrayWork.whileLoop(5)).toBe(15);
    expect(functions.prepArrayWork.whileLoop(100)).toBe(5050);
});

test('example of do while loop', () => {
    expect(functions.prepArrayWork.doWhileLoop(0)).toBe(0);
    expect(functions.prepArrayWork.doWhileLoop(5)).toBe(15);
    expect(functions.prepArrayWork.doWhileLoop(100)).toBe(5050);
});

test('example of for in loop', () => {
    const pets = {
        dog: "Grover",
        cat: "Fluffy"
    };
    expect(functions.prepArrayWork.forInLoop(pets)).toBe("Key: dog Value: Grover\nKey: cat Value: Fluffy\n");
    expect(functions.prepArrayWork.forInLoop(0)).toBe("");
    expect(functions.prepArrayWork.forInLoop(undefined)).toBe("");
    expect(functions.prepArrayWork.forInLoop([])).toBe("");
});

test('example of for of loop', () => {
    expect(functions.prepArrayWork.forOfLoop("abc")).toBe("a b c ");
    expect(functions.prepArrayWork.forOfLoop("How are you?")).toBe("H o w   a r e   y o u ? ");
    expect(functions.prepArrayWork.forOfLoop([0, 1, "a", "b", null])).toBe("0 1 a b null ");
});

// makeEmailObj Daily Exercise of October 11, 2019

test('email builder from an object / map', () => {
    const name = { fname: 'first', lname: 'last' };
    expect(functions.makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
        .toEqual("bill.smith@evolveu.ca");
});

// makeEmailArr Daily Exercise of October 9, 2019

test('email builder from an array', () => {
    const name = ["first", "last"];
    expect(functions.makeEmailArr(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["First", "Last"]))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["Bill", "Smith"]))
        .toEqual("bill.smith@evolveu.ca");
});

// AssertEquals Daily Exercise of October 7, 2019

test('Compare two parameters', () => {
    expect(functions.assertEquals("a","b")).toBe(false);
    expect(functions.assertEquals("a","a")).toBe(true);
    expect(functions.assertEquals(1,2)).toBe(false);
    expect(functions.assertEquals(2,2)).toBe(true);
    expect(functions.assertEquals("2",2)).toBe(false);
    expect(functions.assertEquals("This value", "This value")).toBe(true);
});