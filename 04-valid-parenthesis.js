/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.
*/

const isValid = function (s) {
  const closers = [];
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    switch (current) {
      case "{":
        closers.push("}");
        break;
      case "(":
        closers.push(")");
        break;
      case "[":
        closers.push("]");
        break;
      default:
        if (closers.pop() !== current) {
          return false;
        }
    }
  }
  return !closers.length;
};

// Test case 1: Valid parentheses
console.log(isValid("()")); // Expected output: true

// Test case 2: Valid mixed parentheses
console.log(isValid("()[]{}")); // Expected output: true

// Test case 3: Invalid parentheses (mismatched)
console.log(isValid("(]")); // Expected output: false

// Test case 4: Invalid parentheses (wrong nesting)
console.log(isValid("([)]")); // Expected output: false

// Test case 5: Valid parentheses (nested correctly)
console.log(isValid("{[]}")); // Expected output: true

// Test case 6: Empty string
console.log(isValid("")); // Expected output: true

// Test case 7: Single type with multiple pairs
console.log(isValid("((()))")); // Expected output: true

// Test case 8: Unmatched opening bracket
console.log(isValid("{[}")); // Expected output: false

// Test case 9: Long valid sequence
console.log(isValid("{[()()]}")); // Expected output: true

// Test case 10: Long invalid sequence
console.log(isValid("{[(])}")); // Expected output: false
