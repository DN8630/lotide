const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(inputObject, checkValue) {
  let resultKey;
  const keys = Object.keys(inputObject);
  for (const key of keys) {
    if (inputObject[key] === checkValue) {
      resultKey = key;
      break;
    }
  }
  return resultKey;
};
module.exports = findKeyByValue;
//Test Case 1
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// Test Case 2
const sportsDayGames = {
  day1: "Cricket",
  day2: "Basket Ball",
  day3: "Tennis",
  day5: "Soccer"
};

assertEqual(findKeyByValue(sportsDayGames, "Cricket"), "day1");
assertEqual(findKeyByValue(sportsDayGames, "Soccer"),"day5");
assertEqual(findKeyByValue(sportsDayGames, "Tennis"),"day4");

