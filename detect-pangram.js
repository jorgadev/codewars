function isPangram(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let stringArr = string.split("");
  stringArr.forEach((x) => {
    if (alphabet.includes(x.toLowerCase())) {
      alphabet = alphabet.filter((y) => y != x.toLowerCase());
    }
  });
  if (alphabet.length == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ"));
