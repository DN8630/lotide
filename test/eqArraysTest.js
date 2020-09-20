const assertEqual = require("../assertEqual");
const eqArray = require("../eqArrays");
assertEqual(eqArray([1,2,3],[1,2,3]),true);
assertEqual(eqArray([],[1,2,3]),true);
assertEqual(eqArray(["Hello", "Good"],["Hello","Bad"]),false);
assertEqual(eqArray(["Hello", "Good"],["Hello","Bad"]),true);