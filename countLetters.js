const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentString) {
  const result = {};
  for (const ch of sentString) {
    if (result[ch]) {
      result[ch] += 1;
    } else {
      result[ch] = 1;
    }
  }
  return result;
};

const sentence = "Lighthouse in the house";
const inputString = sentence.split(' ').join("").toLowerCase();
const result = countLetters(inputString);
assertEqual(result["l"],1);
assertEqual(result["i"],2);
assertEqual(result["g"],1);
assertEqual(result["h"],4);
assertEqual(result["t"],2);
assertEqual(result["o"],2);
assertEqual(result["u"],2);
assertEqual(result["s"],2);
assertEqual(result["e"],3);
assertEqual(result["n"],1);


