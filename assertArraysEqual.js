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

const assertArrayEqual = function(firstArr,secondArr) {
  if (eqArray(firstArr,secondArr) === true) {
    console.log(`✅✅ Assertion Passed! [${firstArr}] === [${[secondArr]}]`);
  }
  else {
    console.log(`🔴🔴 Assertion Failed! [${firstArr}] !== [${secondArr}]`);
  }
};

assertArrayEqual([1,2,3],[1,2,3]);
assertArrayEqual([1,2],[]);
assertArrayEqual([1,2,3,4],[1,2,4,3]);
assertArrayEqual(["Hello","Good"],["Hello","Good"]);
assertArrayEqual(["Hello","Good"],["Hello","Bad"]);