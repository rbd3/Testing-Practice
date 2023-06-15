const Calculator = require('./Calculator');

describe('my calculator', () => {
    const calculator = new Calculator();
    test('Addition', () => {
      expect(calculator.add(1,2)).toBe(3);
    });
  
    test('Substraction', () => {
      expect(calculator.subtract(8,4)).toBe(4);
    });

    test('divide', () => {
        expect(calculator.divide(8,4)).toBe(2);
      });

      test('multiply', () => {
        expect(calculator.multiply(8,4)).toBe(32);
      });
  });