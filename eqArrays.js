const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function eqArray to compare two arrays.
const eqArray = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    }
    return true;
  }
};

assertEqual(eqArray([1,2,3],[1,2,3]),true);
assertEqual(eqArray([],[1,2,3]),true);
assertEqual(eqArray(["Hello", "Good"],["Hello","Bad"]),false);
assertEqual(eqArray(["Hello", "Good"],["Hello","Bad"]),true);