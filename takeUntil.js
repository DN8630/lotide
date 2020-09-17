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

const takeUntil = function(array, callback) {
  const resultArray = [];
  for (let item of array) {
    if (!callback(item)) {
      resultArray.push(item);
    } else {
      break;
    }
  
  }

  return resultArray;
};

const numbers = [1,3,5,7,13,26,17,9,6];
const results = takeUntil(numbers, num => num % 2 === 0);
//console.log(results);

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
assertArrayEqual(results,[1,3,5,7,13]);
assertArrayEqual(results1,[1,2,5,7,2]);
assertArrayEqual(results2,["I've", "been", "to", "Hollywood"]);