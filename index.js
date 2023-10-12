function isPalindrome(word) {
  // Write your algorithm here
  // 1- isPalindrome is a function with [one] string argument.
  // 2- isPalindrome will
  // a) return [true] --> if string is palindrome
  // b) return [false] --> if it is not a palindrome
  let lowerCaseWords = word.toLowerCase();
  return lowerCaseWords === lowerCaseWords.split("").reverse().join("");
}

/* 
  Add your pseudocode here
  1- create a function with a string argument
  2- inside the fn, initilize a const x that has .toLowerCase method to convert all letters to lowercase inside the string.
  3- if x === the reversed string value 
  4- Then return true, otherwise return false.
*/

/*
  Add written explanation of your solution here
*/

//You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  // test case 1
  console.log("Expecting:{true}");
  console.log("=>", isPalindrome({ baba }));
  // test case 2
  console.log("Expecting:{false}");
  console.log("=>", isPalindrome({ robot }));
  // test case 3
  console.log("Expecting:{false}");
  console.log("=>", isPalindrome({ bAba }));
}

module.exports = isPalindrome;
