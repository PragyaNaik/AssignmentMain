function isPalindrome(word) {
  word = word.toLowerCase();
  for (var i = 0, j = word.length-1; i < j; i++, j--) {
    if (word[i] !== word[j]) {
      return false;
    }
    return true;
  }
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("foobar"));