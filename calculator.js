function add(x, y) {
  let sum;
  if (isNaN(x) || isNaN(y)) {
    sum = "Invalid Input"
  } else {
    sum = x + y;
  }
  return sum;
}

function subtract(x, y) {
  let diff;
  if (isNaN(x) || isNaN(y)) {
    diff = "Invalid Input"
  } else {
    diff = x - y;
  }
  return diff;
}
  
function multiply(x, y) {
  let product;
  if (isNaN(x) || isNaN(y)) {
    product = "Invalid Input"
  } else {
    product = x * y
  }
  return product;
};
  
function divide(x, y) {
  let result;
  if (y === 0) {
    result = "Infinity"
  } if (isNaN(x) || isNaN(y)) {
    result = "Invalid Input"
  } else {
    result = x / y;
  }
  return result;
};

function decimal(x, y) {
  let dec;
  if (Number.isInteger(x / y)) {
    dec = "false"
  } else {
    dec = "true"
  }
  return dec;
}

function equals(x, y) {
  
}

  const clearAll = () => {
      return 0;
  }
  
  
 
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    equals,
    decimal,
    clearAll
  };