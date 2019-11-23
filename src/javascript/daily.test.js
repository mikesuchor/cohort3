import { sortNumberAsc, sortFruitAsc, sortOriginDesc, functions } from './daily';

// Three Ways of Functions Exercise of November 22, 2019

test('Sort array numerically ascending', () => {
    const testArray = [
        {num: 5,str: "apples", origin:"BC"},
        {num: 7,str: "oranges", origin:"Florida"},
        {num: 2,str: "lemons", origin:"Mexico"}
    ];
    expect(testArray[0].num).toBe(5);
    expect(testArray.sort(sortNumberAsc)[0].num).toBe(2);
    expect(testArray.sort(sortNumberAsc)[2].num).toBe(7);
});

test('Sort array by fruit alphabetically ascending', () => {
    const testArray = [
        {num: 5,str: "apples", origin:"BC"},
        {num: 7,str: "oranges", origin:"Florida"},
        {num: 2,str: "lemons", origin:"Mexico"}
    ];
    expect(testArray[0].str).toBe("apples");
    expect(testArray.sort(sortFruitAsc)[0].str).toBe("apples");
    expect(testArray.sort(sortFruitAsc)[2].str).toBe("oranges");
});

test('Sort array by origin alphabetically descending', () => {
    const testArray = [
        {num: 5,str: "apples", origin:"BC"},
        {num: 7,str: "oranges", origin:"Florida"},
        {num: 2,str: "lemons", origin:"Mexico"}
    ];
    expect(testArray[0].origin).toBe("BC");
    expect(testArray.sort(sortOriginDesc)[0].origin).toBe("Mexico");
    expect(testArray.sort(sortOriginDesc)[2].origin).toBe("BC");
});

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

// Callback Exercise (Part 2) of November 21, 2019

test('Return person', () => {
    const person = {fname:"Alex", lname:"Smith", province:"BC", age:33};
    expect(functions.returnPerson(person)).toBe(person);
});

test('Return age of person', () => {
    const person = {fname:"Alex", lname:"Smith", province:"BC", age:33};
    expect(functions.returnAge(person)).toBe(33);
});

test('Return people object (total people, total age, average age) from BC and AB', () => {
    const testArray = [
        {fname:"Alex", lname:"Smith", province:"BC", age:33},
	    {fname:"Angela", lname:"Jones", province:"AB", age:61}
    ];
    expect(functions.makePeopleObject(testArray)).toEqual({"totalPeople": 2, "totalAge": 94, "averageAge": 47});
    // Not from BC or AB, should not be included
    testArray.push({fname:"Anne", lname:"Bird", province:"SK", age:35});
    expect(functions.makePeopleObject(testArray)).toEqual({"totalPeople": 2, "totalAge": 94, "averageAge": 47});
});

// Callback Exercise (Part 1) of November 8, 2019

test('Process people function with generic callback functions', () => {
    const changeNameTo123 = () => 123;
    const changeNameToLarry = () => "Larry Shumlich";
    expect(functions.processPeople(people, changeNameTo123)[0]).toEqual(123);
    expect(functions.processPeople(people, changeNameToLarry)[0]).toEqual("Larry Shumlich");
})

test('Return full names function', () => {
    expect(functions.returnFullNames({fname:"Mike", lname:"Smith"})).toBe("Mike Smith");
    expect(functions.returnFullNames({fname:"Jack", lname:123})).toBe("Jack 123");
});

test('Process people function with returnFullNames callback function', () => {
    expect(functions.processPeople(people, functions.returnFullNames)[0]).toEqual("Alex Smith");
    expect(functions.processPeople(people, functions.returnFullNames)[1]).toEqual("Angela Jones");
    expect(functions.processPeople(people, functions.returnFullNames)[5]).toEqual("Eva Keiths");
});

const people = [
	{fname:"Alex", lname:"Smith", province:"BC", age:33},
	{fname:"Angela", lname:"Jones", province:"AB", age:61},
	{fname:"Anne", lname:"Bird", province:"SK", age:35},
	{fname:"Brent", lname:"Riddle", province:"MN", age:79},
	{fname:"Byron", lname:"Cardenas", province:"BC", age:38},
	{fname:"Carrie", lname:"Ramirez", province:"AB", age:89},
	{fname:"Cheryl", lname:"Glenn", province:"SK", age:70},
	{fname:"Dima", lname:"Curry", province:"MN", age:67},
	{fname:"Dustin", lname:"Bullock", province:"BC", age:59},
	{fname:"Eva", lname:"Keiths", province:"AB", age:24},
	{fname:"Faith", lname:"Liu", province:"SK", age:46},
	{fname:"Fawad", lname:"Bowman", province:"MN", age:69},
	{fname:"Forest", lname:"Vaughn", province:"BC", age:52},
	{fname:"Giovanni", lname:"Browning", province:"AB", age:32},
	{fname:"Greg", lname:"Hogan", province:"SK", age:55},
	{fname:"Harpreet", lname:"Ramsey", province:"MN", age:18},
	{fname:"Ian", lname:"Fitzgerald", province:"BC", age:16},
	{fname:"James", lname:"Kramer", province:"AB", age:57},
	{fname:"Jarvis", lname:"Ortega", province:"SK", age:69},
	{fname:"Jawad", lname:"Huerta", province:"MN", age:35},
	{fname:"Jinbong", lname:"Robinson", province:"BC", age:26},
	{fname:"Jingnan", lname:"Hatfield", province:"AB", age:71},
	{fname:"Joe", lname:"Banks", province:"SK", age:37},
	{fname:"Kristina", lname:"Dalton", province:"MN", age:73},
	{fname:"Latora", lname:"Matthews", province:"BC", age:25},
	{fname:"Lauren", lname:"McClure", province:"AB", age:42},
	{fname:"Licedt", lname:"Rasmussen", province:"SK", age:30},
	{fname:"Linden", lname:"Pierce", province:"MN", age:68},
	{fname:"Luis", lname:"Price", province:"BC", age:23},
	{fname:"Marcela", lname:"Perez", province:"AB", age:20},
	{fname:"Marilou", lname:"Graham", province:"SK", age:32},
	{fname:"Matt", lname:"Novak", province:"MN", age:29},
	{fname:"Monica", lname:"Giles", province:"BC", age:34},
	{fname:"Niloufar", lname:"Carson", province:"AB", age:29},
	{fname:"Omar", lname:"Olson", province:"SK", age:69},
	{fname:"Roger", lname:"Woodard", province:"MN", age:84},
	{fname:"Roman", lname:"Swanson", province:"BC", age:21},
	{fname:"Seun", lname:"Kelly", province:"AB", age:60},
	{fname:"Shane", lname:"Frost", province:"SK", age:87},
	{fname:"Steven", lname:"Haynes", province:"MN", age:47},
	{fname:"Thomas", lname:"Hart", province:"BC", age:14},
	{fname:"Trent", lname:"Kerr", province:"AB", age:12},
	{fname:"Darrell", lname:"Koch", province:"SK", age:10},
	{fname:"Tylor", lname:"Torres", province:"MN", age:98}
];

// More Array Exercises (Really) of November 6, 2019

test('staff with balance >=1000', () => {
    expect(functions.balance1000(data.staff))
        .toEqual([{ fname: "Liam", lname: "Henry", balance: 1000 }, { fname: "Emma", lname: "Jones", balance: 1330 }]);
});

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