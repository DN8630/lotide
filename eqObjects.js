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
module.exports = eqObjects;
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc);

assertEqual(eqObjects(ab,ba),true);
assertEqual(eqObjects(ab,abc),false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd,dc),true);
assertEqual(eqObjects(cd,cd2),false);