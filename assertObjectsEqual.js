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

const eqObjects = function(object1, object2) {
  let allKeys1 = Object.keys(object1);
  let allKeys2 = Object.keys(object2);
  
  if (allKeys1.length !== allKeys2.length) {
    return false;
  }

  for (const key1 of allKeys1) {
    if (Array.isArray(object1[key1]) && Array.isArray(object2[key1])) {
      if (!eqArray(object1[key1],object2[key1])) {
        return false;
      }
    } else if (object1[key1] !== object2[key1]) {
      return false;
    }
  }
  return true;

};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual,expected) === true) {
    console.log(`✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴 Assertion Failed: ${inspect(actual)} !=== ${inspect(expected)}`);
  }

};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab,ba);
assertObjectsEqual(ab,abc);
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd,dc);
assertObjectsEqual(cd,cd2);

