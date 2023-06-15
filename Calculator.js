class Calculator {
    constructor() {}
  
    add(num1, num2) {
      return num1 + num2;
    }
  
    subtract(num1, num2) {
      return num1 - num2;
    }
  
    divide(num1, num2) {
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        throw new Error("Cannot divide by zero.");
      }
    }
  
    multiply(num1, num2) {
      return num1 * num2;
    }
  }
module.exports = Calculator;