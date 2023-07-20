import { add, subtract, multiply, divide, pow } from "../src/calculator";
import { expect, test } from '@jest/globals';

test('adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5)
})

test("subtracts two numbers correctly", () => {
    expect(subtract(5, 3)).toBe(2);
});

test("multiply two numbers correctly", () => {
    expect(multiply(4, 6)).toBe(24);
});

test("divide two numbers correctly", () => {
    expect(divide(3, 2)).toBeCloseTo(1.5);
});

test("return value of a to the power of b correctly", () => {
    expect(pow(5, 2)).toBe(25);
});