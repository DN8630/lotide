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
  } else {
    console.log(`🔴🔴 Assertion Failed! [${firstArr}] !== [${secondArr}]`);
  }
};


const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    let ch = sentence[i];
    if (ch !== " ") {
      if (results[ch]) {
        results[ch].push(i);
      } else {
        results[ch] = [i];
      }
    }

  }
  return results;
};

//Test case
const sentence = "lighthouse in the house";
const result = letterPositions(sentence);
assertArrayEqual(result.l,[0]);
assertArrayEqual(result.i,[1,11]);
assertArrayEqual(result.g,[2]);
assertArrayEqual(result.h,[3,5,15,18]);
assertArrayEqual(result.t,[4,14]);
assertArrayEqual(result.o,[6,19]);
assertArrayEqual(result.u,[7,20]);
assertArrayEqual(result.s,[8,21]);
assertArrayEqual(result.e,[9,16,22]);
assertArrayEqual(result.n,[12]);
