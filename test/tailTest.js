const assertEqual = require("../assertEqual");
const tail = require("../tail");
let array = ["Hello", "Lighthouse", "Labs"];
const result = tail(array);
assertEqual(result.length,array.length - 1);
for (let i = 0; i < result.length; i++) {
  assertEqual(array[i + 1],result[i]);
}