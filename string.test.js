import { describe, expect } from '@jest/globals';
import { stringLength,  reverseString, calculator, capitalize } from './index.js';


test('text length', () =>{
    expect(stringLength("drissa")).toBe(6);
});

test('text length equal to 0', () => {
    expect(() => stringLength("")).toThrow(new Error('string must be at least 1 character long'));
});

test('text length more than 10', () => {
    expect(() => stringLength("drissaddddddd")).toThrow(new Error('string must be at most 10 characters long'));
});

test('reverse string', () => {
    expect(reverseString("drissa")).toBe("assird");
});

describe('calculator', () => {
    let myCalculator;
  
    beforeEach(() => {
      myCalculator = new calculator();
    });
  
    describe('add', () => {
      it('should return the sum of two numbers', () => {
        expect(myCalculator.add(1, 2)).toBe(3);
        expect(myCalculator.add(-1, 2)).toBe(1);
        expect(myCalculator.add(0, 10)).toBe(10);
      });
    });
  
    describe('subtract', () => {
      it('should return the difference between two numbers', () => {
        expect(myCalculator.subtract(2, 1)).toBe(1);
        expect(myCalculator.subtract(-1, -3)).toBe(2);
        expect(myCalculator.subtract(0, 10)).toBe(-10);
      });
    });
  
    describe('multiply', () => {
      it('should return the product of two numbers', () => {
        expect(myCalculator.multiply(2, 3)).toBe(6);
        expect(myCalculator.multiply(-1, 2)).toBe(-2);
        expect(myCalculator.multiply(0, 10)).toBe(0);
      });
    });
  
    describe('divide', () => {
      it('should return the quotient of two numbers', () => {
        expect(myCalculator.divide(6, 2)).toBe(3);
        expect(myCalculator.divide(-10, 2)).toBe(-5);
        expect(myCalculator.divide(0, 10)).toBe(0);
  
        // Test divide by zero
            expect(Number.isNaN(myCalculator.divide(5, 0))).toBe(false);
            
      });
    });
  });

  test('capitalize', () => {
    expect(capitalize("damme")).toBe("Damme");
  })