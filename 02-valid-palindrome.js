// // option A
// const isPalindrome = function (s) {
//   let str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
//   return str === str.split("").reverse().join("")
// };

// option B
const isPalindrome = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }

    while (left < right && !isAlphanumeric(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }
  return true;
};

// Helper function to check if a character is alphanumeric
function isAlphanumeric(char) {
  return /^[a-z0-9]$/i.test(char);
}

// Test case 1: Classic palindrome with punctuation
console.log(isPalindrome("A man, a plan, a canal: Panama"));
// Expected output: true

// Test case 2: Not a palindrome
console.log(isPalindrome("race a car"));
// Expected output: false

// Test case 3: Empty string (considered a palindrome)
console.log(isPalindrome(" "));
// Expected output: true

// Test case 4: Palindrome with mixed case and spaces
console.log(isPalindrome("No 'x' in Nixon"));
// Expected output: true

// Test case 5: Palindrome with only numbers
console.log(isPalindrome("12321"));
// Expected output: true

// Test case 6: Not a palindrome with similar characters
console.log(isPalindrome("hello"));
// Expected output: false

// Test case 7: Special characters only
console.log(isPalindrome("!@#$%^&*()"));
// Expected output: true (empty after filtering)

// Test case 8: Longer palindrome with numbers and letters
console.log(isPalindrome("Able was I saw Elba"));
// Expected output: true

// Test case 9: Non-alphanumeric characters mixed with valid characters
console.log(isPalindrome("2A3*3a2"));
// Expected output: true

// Test case 10: Long non-palindromic string
console.log(isPalindrome("This is definitely not a palindrome."));
// Expected output: false
