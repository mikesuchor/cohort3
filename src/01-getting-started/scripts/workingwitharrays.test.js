import workingWithArrays from './workingwitharrays';

test("test adding number to array", (num) => {
    workingWithArrays.arr = [3, 6, 9];
    workingWithArrays.addToArray(12);
    expect(workingWithArrays.arr).toStrictEqual([3, 6, 9, 12]);
});

test("test totaling contents of array", () => {
    workingWithArrays.arr = [1, 2, 3]
    expect(workingWithArrays.totalArray()).toBe(6);
});

test("test clearing whole array", () => {
    workingWithArrays.arr = [0, 1, 2];
    workingWithArrays.clearArray();
    expect(workingWithArrays.arr).toStrictEqual([]);
});