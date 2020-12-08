function stringTransformer(str) {
  let words = str.split(" ").reverse();
  return words
    .map((word) => {
      return word
        .split("")
        .map((char) => {
          if (char == char.toLowerCase()) {
            return char.toUpperCase();
          } else {
            return char.toLowerCase();
          }
        })
        .join("");
    })
    .join(" ");
}

console.log(stringTransformer("Example string"));
