const assertArrayEqual = require("../assertArraysEqual");
assertArrayEqual([1,2,3],[1,2,3]);
assertArrayEqual([1,2],[]);
assertArrayEqual([1,2,3,4],[1,2,4,3]);
assertArrayEqual(["Hello","Good"],["Hello","Good"]);
assertArrayEqual(["Hello","Good"],["Hello","Bad"]);
