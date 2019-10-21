import workingWithArrays from './workingwitharrays';

test("test adding number to array", () => {
    workingWithArrays.arr = [3, 6, 9];
    expect(workingWithArrays.addToArray(12)).toEqual([3, 6, 9, 12]);
});

test("showing contents of array", () => {
    workingWithArrays.arr = [];
    expect(workingWithArrays.showArray()).toEqual("Message Area");
    workingWithArrays.arr = [3, 4, 5];
    expect(workingWithArrays.showArray()).toEqual([3, 4, 5]);
});

test("test totaling contents of array", () => {
    workingWithArrays.arr = [1, 2, 3]
    expect(workingWithArrays.totalArray()).toBe(6);
});

test("test clearing whole array", () => {
    workingWithArrays.arr = [0, 1, 2];
    workingWithArrays.clearArray();
    expect(workingWithArrays.arr).toEqual([]);
});