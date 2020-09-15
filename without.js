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

const assertArraysEqual = function(firstArr,secondArr) {
  if (eqArray(firstArr,secondArr) === true) {
    console.log(`✅✅ Assertion Passed! [${firstArr}] === [${[secondArr]}]`);
  } else {
    console.log(`🔴🔴 Assertion Failed! [${firstArr}] !== [${secondArr}]`);
  }
};

// Without function to remove elements from source array
const without = function(source,itemsToRemove) {
  let output = [];
  for (let i = 0; i < source.length; i++) {
    let equalElm = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        equalElm = true;
      }
    }
    if (equalElm !== true) {
      output.push(source[i]);
    }
  }
  return output;
};

const words = ["hello", "world", "lighthouse"];
const newWords = without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(newWords, ["hello", "world", "lighthouse"]);
const array = [1,2,3,4];
const newArray = without(array, [1,2]);
assertArraysEqual(array, [1,2,3,4]);
assertArraysEqual(newArray, [1,2,3,4]);