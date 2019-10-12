import workingWithArrays from './workingwitharrays';

test("test adding number to array", (num) => {
    expect(workingWithArrays.addToArray(1)).toBe(1);
});

test("test showing array contents", () => {
    expect(workingWithArrays.showArray()).toBe(1);
});

test("test totaling contents of array", () => {
    expect(workingWithArrays.showArray()).toBe(1);
});

test("test clearing whole array", () => {
    expect(workingWithArrays.clearArray()).toBe(1);
});