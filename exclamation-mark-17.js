function balance(left, right) {
  const arr = [left, right];
  let leftSum = 0;
  let rightSum = 0;
  arr.forEach((str, index) => {
    str.split("").map((x) => {
      if (x == "!" && index == 0) {
        leftSum += 2;
      } else if (x == "?" && index == 0) {
        leftSum += 3;
      } else if (x == "!" && index == 1) {
        rightSum += 2;
      } else if (x == "?" && index == 1) {
        rightSum += 3;
      }
    });
  });
  if (leftSum == rightSum) {
    return "Balance";
  } else if (leftSum > rightSum) {
    return "Left";
  } else {
    return "Right";
  }
}

console.log(balance("!!???!????", "??!!?!!!!!!!"));
