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

const middle = function(array) {
  let output = [];
  let arrLength = array.length;
  let index = parseInt((arrLength - 1) / 2);
  if (arrLength <= 2) {
    return output;
  } else if (arrLength % 2 === 0) {
    output.push(array[index]);
    output.push(array[index + 1]);
  } else if (arrLength % 2 !== 0) {
    output.push(array[index]);
  }
  return output;
};

//Test Case 1
let inputArray = [1,2,3,4,5];
let result = middle(inputArray);
assertArrayEqual(result,[3]);
//Test case with empty array input
inputArray = [];
result = middle(inputArray);
assertArrayEqual(result,[]);
//Test case with 1 array input
inputArray = [5];
result = middle(inputArray);
assertArrayEqual(result,[]);
//Test case with 2 array input
inputArray = [5,7];
result = middle(inputArray);
assertArrayEqual(result,[]);
//Test case with even 4array input
inputArray = [1,5,7,8];
result = middle(inputArray);
assertArrayEqual(result,[5,6]);

