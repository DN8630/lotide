# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @daya_nayak/lotide`

**Require it:**

`const _ = require('@daya_nayak/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* assertEqual(actual,expected): Compares actual and expected values and returns results as passed or failed.
* assertArraysEqual(actualArray,expectedArray): Compares actual and expected arrays and returns result as passed or failed.
* assertObjectsEqual(object,object): Compares actual and expected objects and returns result as passed or failed.
* countLetters(string): Returns the count of each of the letters in a given string.
* head(array): Returns the first element of an array.
* tail(array): Returns every element except the first element of an array.
* middle(array): Returns the middle value of an array with more than 2 elements. For an odd length array it returns middle value and for even length array it returns both the middle values.
* countOnly(allItems, itemsToCount): Given a collection of items, it returns the count of specified subset of items. 
* eqArrays(array1, array2): Compares two arrays and returns true or false.
* eqObjects(object1, object2): Compares two objects and returns true or false.
* findKey(object, callback): Checks the given object and returns the first key for which the callback returns a truthy value.
* findKeyByValue(object,value): Checks the given object and returns the first key which contains the given value.
* letterPositions(string): Returns all the indices (zero-based positions) in the string where each character is found.
* map(array,callback): Returns a new array based on the results of the callback function.
* takeUntil(array,callback): Returns a slice of the array with elements taken from the beginning until the callback returns a truthy value.
* without(source,itemsToRemove): Returns a subset of a given array, removing specified elements.