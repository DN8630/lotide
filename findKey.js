const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {
  let result;
  const keys = Object.keys(obj);
  for (let key of keys) {
    if (callback(obj[key])) {
      result = key;
      break;
    }
  }
  return result;

};



// Test cases
const results = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

let results1 = findKey({
  a: 10,
  b: 20,
  c: 11,
  d: 25,
  e: 22
}, x => x % 2 !== 0);
assertEqual(results,"noma");
assertEqual(results1,'c');