function expandedForm(num) {
  let arr = num.toString().split("").reverse();
  arr = arr
    .map((digit, i) => {
      if (digit != 0) {
        return Math.pow(10, i) * parseInt(digit);
      } else {
        return "";
      }
    })
    .filter((x) => x != "")
    .reverse();
  return arr.join(" + ");
}

console.log(expandedForm(70304));
