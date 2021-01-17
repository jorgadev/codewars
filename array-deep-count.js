let count = 0;

function deepCount(a, first = true) {
  if (first == true) {
    count = 0;
  }
  a.forEach((e) => {
    if (typeof e === "object") {
      count++;
      deepCount(e, false);
    } else {
      count++;
    }
  });
  return count;
}

console.log(deepCount([[[[[[[[[]]]]]]]]]));
