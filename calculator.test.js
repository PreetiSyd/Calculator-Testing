const { add, subtract, multiply, divide, equals, decimal, clearAll} = require("./calculator.js");

//-----------Test Suite for Addition Function------------------
describe("valid additions", () => {
// Test to check the sum of single-digit number & 2-Digit Number
    test("5 + 10 = 15", () => {
      expect(add(5, 10)).toEqual(15);
    });
  
// Test to check the Sum of 2-digit number & 3-digit number
    test("40 + 209 = 249", () => {
      expect(add(40, 209)).toEqual(249);
    });

// Test to check the Sum of a string and a 2-digit number
    test("String + 25", () => {
        expect(add('Hello', 25)).toBe("Invalid Input")
    });

// Test to check the sum of Floating-point numbers
    test("10.2 + 22.05 = 32.25", () => {
        expect(add(10.2, 22.05)).toEqual(32.25)
    });

// Test to check the sum of negative & positive numbers
    test("-1 + 8 = 7", () => {
        expect(add(-1, 8)).toEqual(7)
    });
});

//---------------Test Suite for Subtraction Function----------
describe("valid subtraction", () => {
// Test to check single-digit number from 2-digit number
    test("10 - 1 = 9", () => {
      expect(subtract(10, 1)).toEqual(9);
    });
  
// Test to check 2-digit number from 3-digit number
    test("200 - 10 = 190", () => {
      expect(subtract(200, 10)).toEqual(190);
    });

// Test to check 0 from a number
    test("506 - 0 = 506", () => {
        expect(subtract(506, 0)).toEqual(506);
    });

// Test to check Negative number from a positive number
    test("467 - (-45) = 512", () => {
        expect(subtract(467, -45)).toEqual(512);
    });

// Test to Subtract a string from a number
    test("28 - Morning = Invalid Input", () => {
        expect(subtract(28, 'Morning')).toBe("Invalid Input");
    });
  });

//----------------Test Suite for Multiply Function-------------------
describe("Valid Multiplication", () => {
// Test to check Multiplication with a 0
    test("3879 * 0 = 0", () => {
        expect(multiply(3879, 0)).toEqual(0);
    });

// Test to check Multiplication with a Negative Number
    test("-45 * 29 = -1305", () => {
        expect(multiply(-45, 29)).toEqual(-1305);
    });

// Test to check multiplication of two Negative numbers
    test("-598 * -301 = 179998", () => {
        expect(multiply(-598, -301)).toEqual(179998);
    });

// Test to check multiplication with String & Number
    test("Multiply * 300", () => {
        expect(multiply('Multiply', 300)).toBe("Invalid Input");
    });
});

//--------------------Test Suite for Division Function------------------
describe("Valid Division", () => {
// Test to check Division by a negative number
    test("345 / -1 = -345", () => {
        expect(divide(345, -1)).toEqual(-345)
    });

// Test to check Division by a String
    test("Divide / 20 = Invalid Input", () => {
        expect(divide('Divide', 20)).toBe("Invalid Input")
    });
});

//----------------Test Suite for Decimal Function--------------------------
describe("Valid Decimal", () => {
// Test to check if the Division of 10 & 5 gives a Decima Number
    test("10 / 5 has Decimal", () => {
        expect(decimal(10, 5)).toBe("false")
    });
// Test to check if Addition of 3.4 & 5.7 gives a decimal Number
    test("3.4 + 5.7", () => {
        expect(decimal(3.4 + 5.7)).toBe("true")
    });
});

//------------------Test Suite for Equal Function--------------------------
describe("Valid Equality", () => {
// Test to check valid result after the equal sign
    test("2 + 4 = 6", () => {
        expect(add(2, 4)).toEqual(6)
    });

// Test to check valid result after the equal sign
    test("60 * 3 = 180", () => {
        expect(multiply(60, 3)).toEqual(180)
    });
})

//------------------------Test Suite for Clear Function---------------------
describe("Valid Clear", () => {
// Test to check if clearAll clears number 34 on the Display screen
    test("Clear 34", () => {
        expect(clearAll(34)).toBe(0)
    });
// Test to check if clearAll clears number 13.67 on the display screen
    test("Clears 13.67", () => {
        expect(clearAll(13.67)).toBe(0)
    });
});