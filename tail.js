const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};
let array = ["Hello", "Lighthouse", "Labs"];
const result = tail(array);
assertEqual(result.length,array.length - 1);
for (let i = 0; i < result.length; i++) {
  assertEqual(array[i + 1],result[i]);
}

