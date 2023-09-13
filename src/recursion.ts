/** product: calculate the product of an array of numbers. */

function product(nums: number[], idx = 0): number {
  if (idx == nums.length) return 1;
  return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words: string[], idx = 0, wordMaxLen = 0) {
  if (idx == words.length) return wordMaxLen;
  wordMaxLen = Math.max(words[idx].length, wordMaxLen);
  return longest(words, idx + 1, wordMaxLen);
}

// // /** everyOther: return a string with every other letter. */

function everyOther(str: string, idx = 0, output = "") {
  if (idx == str.length) return output;
  if (idx % 2 == 0) {
    output += str[idx];
  }
  return everyOther(str, idx + 1, output);
}

// /** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str: string, idx = 0) {
  let left = idx;
  let right = str.length - idx - 1;
  if (str[left] !== str[right]) return false;
  if (left >= right) return true;

  return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr: string[], str: string, idx = 0) {
  if (idx == arr.length) return -1;
  if (arr[idx] == str) return idx;

  return findIndex(arr, str, idx + 1);
}

// /** revString: return a copy of a string, but in reverse. */

function revString(str: string, idx = 0, output = "") {
  if (idx === str.length) return output;
  output += str[str.length - idx - 1];
  return revString(str, idx + 1, output);
}

// /** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj: Record<string, any>): string[] {
  let output: string[] = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      output.push(obj[key]);
    }
    if (typeof obj[key] === "object") {
      output = [...output, ...gatherStrings(obj[key])];
    }
  }
  return output;
}

//function gatherStrings(obj: object): string[] {
// let stringArr = [];
// for (let key in obj) {
//   if (typeof obj[key] === "string") stringArr.push(obj[key]);
//   if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
// }
// return stringArr;

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

// function binarySearch(arr, val) {

// }

// JS SOLUTION BELOW

/** product: calculate the product of an array of numbers. */

// const { count } = require("console");

// function product(nums, idx = 0) {
//   if(nums.length === idx) return 1;
//   return nums[idx] * product(nums , idx+1);
// }

// /** longest: return the length of the longest word in an array of words. */

// function longest(words, idx = 0,wordMaxLen = 0) {
//   if(idx === words.length) return wordMaxLen;
//   // increase wordMaxLen by one
//   // increase idx by one
//   wordMaxLen = Math.max(words[idx].length, wordMaxLen)
//   return longest(words, idx+=1, wordMaxLen);
// }

// // /** everyOther: return a string with every other letter. */

// function everyOther(str, idx=0, output="") {
//   if(idx === str.length) return output;
//   idx % 2 === 0 ? output = output.concat(str[idx]) : ""
//   return everyOther(str, idx+=1, output)
// }

// /** isPalindrome: checks whether a string is a palindrome or not. */

// function isPalindrome(str, idx=0, final) {

//   if(idx === str.length) return final;
//   let left = str[idx];
//   let right = str[str.length - 1 - idx];
//   final = left !== right ? false : true
//   // let first_half = str.slice(0,Math.floor(str.length/2)+1)
//   // let second_half = str.slice(Math.floor(str.length/2), str.length)
//   // console.log(first_half)
//   // console.log(second_half);
//   // first_half === second_half ? output = output.concat() : "";

//   return isPalindrome(str, idx+=1, final)

// }

// /** findIndex: return the index of val in arr (or -1 if val is not present). */

// function findIndex(arr, val, idx=0) {
//   if(idx === arr.length) return -1;
//   if(val === arr[idx]) return idx;

//   return findIndex(arr, val, idx+=1)
// }

// /** revString: return a copy of a string, but in reverse. */

// function revString(str, i=str.length-1, output="") {
//   if (i === -1) return output;
//   output += str[i]
//   return revString(str, i-1, output)
// }

// /** gatherStrings: given an object, return an array of all of the string values. */

// function gatherStrings(obj) {
//   let output = [];
//   for (let key in obj) {
//     if(typeof obj[key] === "string") output.push(obj[key]);
//     if(typeof obj[key] === "object")output.push(...gatherStrings(obj[key]));
//   }
//   return output;
// }

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

// function binarySearch(arr, val) {

// }

export {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  // binarySearch
};
