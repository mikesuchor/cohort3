import functions from './daily';

test('Compare two parameters', () => {
    expect(functions.assertEquals("a","b")).toBe(false);
    expect(functions.assertEquals("a","a")).toBe(true);
    expect(functions.assertEquals(1,2)).toBe(false);
    expect(functions.assertEquals(2,2)).toBe(true);
    expect(functions.assertEquals("2",2)).toBe(false);
    expect(functions.assertEquals("This value", "This value")).toBe(true);
});

test('email builder from an array', () => {
    const name = ["first", "last"];
    expect(functions.makeEmailArr(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["First", "Last"]))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["Bill", "Smith"]))
        .toEqual("bill.smith@evolveu.ca");
});

test('email builder from an object / map', () => {
    const name = { fname: 'first', lname: 'last' };
    expect(functions.makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
        .toEqual("bill.smith@evolveu.ca");
});

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