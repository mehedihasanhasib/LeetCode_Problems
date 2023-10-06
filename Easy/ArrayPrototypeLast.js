/*
Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1. You may assume the array is the output of JSON.parse.

 Example 1:

Input: nums = [null, {}, 3]
Output: 3
Explanation: Calling nums.last() should return the last element: 3.

Example 2:

Input: nums = []
Output: -1
Explanation: Because there are no elements, return -1.
*/

const myArray = [2, 3, 4, 6];

//console.log(myArray.length);

Array.prototype.last = function () {
  let lasElement = this.at(-1);
  let empty = -1;
  if (this.length == 0) {
    return empty;
  } else {
    return lasElement;
  }
};

let lastValue = myArray.last();
console.log(lastValue);
