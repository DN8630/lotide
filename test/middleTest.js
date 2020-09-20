const middle = require("../middle");
const assertArrayEqual = require("../assertArraysEqual");
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
