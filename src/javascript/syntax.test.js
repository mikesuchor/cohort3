import syntax from './syntax';

test("If it's a number", () => {
    expect(syntax.testNumber("a")).toBe("a is not a number");
    expect(syntax.testNumber(5)).toBe("5 is a number");
});

test("If it's a string", () => {
    expect(syntax.testString("a")).toBe("a is a string");
    expect(syntax.testString(5)).toBe("5 is not a string");
})

test("If it's a boolean", () => {
    expect(syntax.testBoolean(true)).toBe("true is a boolean");
    expect(syntax.testBoolean(false)).toBe("false is a boolean");
    expect(syntax.testBoolean("a")).toBe("a is not a boolean");
    expect(syntax.testBoolean(5)).toBe("5 is not a boolean");
})

test("If it's an array", () => {
    expect(syntax.testArray([])).toBe("Array");
    expect(syntax.testArray(5)).toBe("5 is not an array");
})

test("If it's an object", () => {
    expect(syntax.testObject(1)).toBe("1 is not an object");
    expect(syntax.testObject({})).toBe("Object");
})

test("If it's undefined", () => {
    let pi;
    expect(syntax.testUndefined(pi)).toBe("undefined is undefined");
    expect(syntax.testUndefined(undefined)).toBe("undefined is undefined");
    expect(syntax.testUndefined(1)).toBe("1 is not undefined");
})

test("Test if/else", () => {
    expect(syntax.testIfElse(-20)).toBe("-20 is less than 10");
    expect(syntax.testIfElse(10)).toBe("10 is 10 or more");
})

test("Test parameters", () => {
    expect(syntax.testParameters("a", "b")).toBe("The paramaters are a & b");
    expect(syntax.testParameters(0, null)).toBe("The paramaters are 0 & null");
})

test("Test returns", () => {
    expect(syntax.testReturns(5, 10)).toBe("This function is returning 5 & 10");
    expect(syntax.testReturns(undefined, "hello")).toBe("This function is returning undefined & hello");
})

test("Test unshift()", () => {
    expect(syntax.testUnshift([])).toStrictEqual(["hello"]);
    expect(syntax.testUnshift([0, 1, 2])).toStrictEqual(["hello", 0, 1, 2]);
    expect(syntax.testUnshift(245)).toBe("Not an array");
})

test("Test push()", () => {
    expect(syntax.testPush([])).toStrictEqual(["hello"]);
    expect(syntax.testPush([0, 1, 2])).toStrictEqual([0, 1, 2, "hello"]);
    expect(syntax.testPush(123)).toBe("Not an array");
})

test("Test update array", () => {
    expect(syntax.testUpdateArray([])).toStrictEqual(["updated"]);
    expect(syntax.testUpdateArray([0, 1, 2])).toStrictEqual(["updated", 1, 2]);
    expect(syntax.testUpdateArray([[[0, 1, [null]]], 7, 10])).toStrictEqual(["updated", 7, 10])
    expect(syntax.testUpdateArray("howdy")).toBe("Not an array");
})

test("Test for loop", () => {
    expect(syntax.testForLoop(5)).toBe(15);
    expect(syntax.testForLoop(100)).toBe(5050);
    expect(syntax.testForLoop("abc")).toBe("Not a number");
})

test("Test for in loop", () => {
    const pets = {
        dog: "Grover",
        cat: "Fluffy"
    };
    expect(syntax.testForIn(pets)).toBe("Key: dog Value: Grover\nKey: cat Value: Fluffy\n");
    expect(syntax.testForIn(0)).toBe("");
    expect(syntax.testForIn(undefined)).toBe("");
    expect(syntax.testForIn([])).toBe("");
})

test("Test while loop", () => {
    expect(syntax.testWhile(5)).toBe(15);
    expect(syntax.testWhile(100)).toBe(5050);
    expect(syntax.testWhile("abc")).toBe("Not a number");
})

test("Do while loop", () => {
    expect(syntax.testDoWhile(5)).toBe(15);
    expect(syntax.testDoWhile(100)).toBe(5050);
    expect(syntax.testDoWhile("abc")).toBe("Not a number");
})

test("Test forEach()", () => {
    expect(syntax.testForEach([0, 1, 2])).toStrictEqual(["0hi", "1hi", "2hi"]);
    expect(syntax.testForEach("hello")).toStrictEqual("Not an array");
})

test("Test declare object", () => {
    expect(syntax.testDeclareObject()).toStrictEqual({
        dog: "Grover",
        cat: "Fluffy",
        duck: "Quackers"
    });
})

test("Test lookup key", () => {
    expect(syntax.testLookupKey()).toBe("Quackers");
})