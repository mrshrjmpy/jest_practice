import calculator from './calculator';

test("1+2", () => {
    expect(calculator.add(1,2)).toBe(3);
});

test("-1 + -2", () => {
    expect(calculator.add(-1,-2)).toBe(-3);
});

test("floating point", () => {
    expect(calculator.add(-1.5,-2.5)).toBe(-4);
});

test("string", () => {
    expect(calculator.add("hello")).toBe("Error! Please enter two numbers.");
});

test("1-2", () => {
    expect(calculator.subtract(1,2)).toBe(-1);
});

test("1/2", () => {
    expect(calculator.divide(1,2)).toBe(0.5);
});

test("1/0", () => {
    expect(calculator.divide(1,0)).toBe("Divisor cannot be zero.");
});