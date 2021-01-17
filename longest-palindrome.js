longestPalindrome = function (s) {
  if (s.length !== 0) {
    let palindrome = "";
    for (let i = 0; i <= s.length; i++) {
      for (let j = 0; j <= s.length; j++) {
        if (s.length === 1) {
          palindrome = s;
        }
        if (
          s.slice(i, j) == s.slice(i, j).split("").reverse().join("") &&
          s.slice(i, j).length >= palindrome.length
        ) {
          palindrome = s.slice(i, j);
        }
      }
    }
    return palindrome === ""
      ? "Are you sure that is a palindrome?"
      : palindrome.length;
  } else {
    return 0;
  }
};

console.log(longestPalindrome("baa"));
