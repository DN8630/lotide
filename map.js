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
  } else {
    console.log(`🔴🔴 Assertion Failed! [${firstArr}] !== [${secondArr}]`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;

};
module.exports = map;
// Test cases
const results1 = map(words, word => word[0]);
assertArrayEqual(results1,["g","c","t","m","t"]);


let testArray = [1,2,3,4];
let results = map(testArray, num => num * 2);
assertArrayEqual(results,[2,4,6,8]);


testArray = [9,16,25,100];
results = map(testArray, num => Math.sqrt(num));
assertArrayEqual(results,[3,4,5,10]);


