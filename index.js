export class calculator {
    add = (a, b) => {
        return a + b;
    }

    subtract = (a, b) => {
        return a - b;
    }

    multiply = (a, b) => {
        return a * b;
    }

    divide = (a, b) => {
        return a / b;
    }
}


export const stringLength = string => {
    if (string.length < 1) {
      throw new Error('string must be at least 1 character long');
    }
    if (string.length > 10) {
      throw new Error('string must be at most 10 characters long');
    }
    return string.length;
  };
  
export const reverseString = string => {
    return string.split('').reverse().join('');
  };

export const capitalize = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}