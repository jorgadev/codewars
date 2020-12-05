function letterCount(s) {
  const obj = {};
  const arr = s.split("");
  arr.forEach((c) => {
    if (c.charCodeAt(0) > 96 && c.charCodeAt(0) < 123) {
      if (obj.hasOwnProperty(`${c}`)) {
        obj[c]++;
      } else {
        obj[c] = 1;
      }
    }
  });
  return obj;
}

console.log(letterCount("arithmetics"));
