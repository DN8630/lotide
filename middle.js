const eqArray = require("./eqArrays");
const assertArrayEqual = require("./assertArraysEqual");

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
module.exports = middle;

