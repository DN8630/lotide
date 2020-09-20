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

const flatten = function(arrays) {
  let arrLength = arrays.length;
  let output = [];
  for (let i = 0; i < arrLength; i++) {
    if (Array.isArray(arrays[i]) === true) {
      let count = 0;
      while (count < arrays[i].length) {
        output.push(arrays[i][count]);
        count++;
      }
    } else {
      output.push(arrays[i]);
    }

  }
  return output;
};
//Test case 1
let inputArray = [1,2,3,[4,5],6,7,[8]]; 
let flattenedArray = flatten(inputArray);
console.log(assertArrayEqual(flattenedArray,[1,2,3,4,5,6,7,8])); //checking if the flattened array is as expected

//Test Case 2
//Test case 1
inputArray = ["Hello","Good",["Morning","Good Day","Bye"]]; 
flattenedArray = flatten(inputArray);
console.log(assertArrayEqual(flattenedArray,["Hello","Good","Morning","Good Day","Bye"])); //checking if the flattened array is as expected

inputArray = [];
flattenedArray = flatten(inputArray);
console.log(assertArrayEqual(flattenedArray,[])); 
