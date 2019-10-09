import syntax from './syntax';

test("If it's a number", () => {
    expect(syntax.testNumber("a")).toBe(false);
    expect(syntax.testNumber(5)).toBe(true);
});

test("If it's a string", () => {
    expect(syntax.testString("a")).toBe(true);
    expect(syntax.testString(5)).toBe(false);
})

test("If it's a boolean", () => {
    expect(syntax.testBoolean(true)).toBe(true);
    expect(syntax.testBoolean(false)).toBe(true);
    expect(syntax.testBoolean("a")).toBe(false);
    expect(syntax.testBoolean(5)).toBe(false);
})

test("If it's an array", () => {
    expect(syntax.testArray([])).toBe(true);
    expect(syntax.testArray({})).toBe(false);
})

test("If it's an object", () => {
    expect(syntax.testObject(1)).toBe(false);
    expect(syntax.testObject({})).toBe(true);
})

test("If it's undefined", () => {
    expect(syntax.testUndefined(1)).toBe(false);
    expect(syntax.testUndefined(undefined)).toBe(true);
})