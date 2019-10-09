import calculator from './calculator';

test("Add function works", () => {
    expect(calculator.add(-10,-5)).toBe(-15);
    expect(calculator.add(0,0)).toBe(0);
    expect(calculator.add(1,2)).toBe(3);
});

test("Subtract function works", () => {
    expect(calculator.subtract(-10,-5)).toBe(-5);
    expect(calculator.subtract(0,0)).toBe(0);
    expect(calculator.subtract(2,1)).toBe(1);
});

test("Multiply function works", () => {
    expect(calculator.multiply(-10,-5)).toBe(50);
    expect(calculator.multiply(-10,5)).toBe(-50);
    expect(calculator.multiply(0,0)).toBe(0);
    expect(calculator.multiply(0,2)).toBe(0);
    expect(calculator.multiply(1,2)).toBe(2);
});

test("Divide function works", () => {
    expect(calculator.divide(-4,-2)).toBe(2);
    expect(calculator.divide(-4,2)).toBe(-2);
    expect(calculator.divide(0,1)).toBe(0);
    expect(calculator.divide(1,0)).toBe(Infinity);
    expect(calculator.divide(4,2)).toBe(2);
});