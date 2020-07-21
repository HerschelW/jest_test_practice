/*
    Jest, by default will scan your project for anything that ends in .test.js or .test.jsx
*/

// lets practice Test Driven Development -- import a file, run the function, and test it all out

const fizz = require("../modules/fizz"); // imports our fizz function
const leap = require("../modules/leap");

// jest comes with its own helper functions: test() expect() toBe();

// first, we describe the test in readable human language
// second, we call the function that we want to test with the given parameters
// third, we compare the result to what we think it should be

test("any number divisible by 3 will equal Fizz", () => {
  // test sum(1,2) === 3
  expect(fizz(3)).toEqual("Fizz");
});

test("any number divisible by 5 will equal Buzz", () => {
  // test sum(1,2) === 3
  expect(fizz(5)).toEqual("Buzz");
});

test("any number divisible by both 3 and 5 will equal FizzBuzz", () => {
  // test sum(1,2) === 3
  expect(fizz(15)).toEqual("FizzBuzz");
});

test("any year divisible by 100 is not a leap year", () => {
  // test sum(1,2) === 3
  expect(leap(100)).toEqual(false);
});

test("any year divisible by 4 is a leap year", () => {
  // test sum(1,2) === 3
  expect(leap(2020)).toEqual(true);
});

test("any year that is not divisible by 4 is a leap year", () => {
  expect(leap(2021)).toEqual(false);
});
