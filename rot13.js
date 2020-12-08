function rot13(message) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return message
    .split("")
    .map((c) => {
      if (
        (c.charCodeAt(0) > 31 && c.charCodeAt(0) < 65) ||
        (c.charCodeAt(0) > 90 && c.charCodeAt(0) < 97)
      ) {
        return c;
      } else {
        if (alphabet.indexOf(c.toLowerCase()) > 12) {
          if (c == c.toLowerCase()) {
            return alphabet[alphabet.indexOf(c.toLowerCase()) - 13];
          } else {
            return alphabet[
              alphabet.indexOf(c.toLowerCase()) - 13
            ].toUpperCase();
          }
        } else {
          if (c == c.toLowerCase()) {
            return alphabet[alphabet.indexOf(c.toLowerCase()) + 13];
          } else {
            return alphabet[
              alphabet.indexOf(c.toLowerCase()) + 13
            ].toUpperCase();
          }
        }
      }
    })
    .join("");
}

console.log(rot13("Test"));
