function listSquared(m, n) {
  let recreated = [];
  for (let i = m; i <= n; i++) {
    let divisors = [];
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        divisors.push(j * j);
      }
    }
    let sum = divisors.reduce((a, b) => a + b, 0);
    if (Math.sqrt(sum) % 1 === 0) {
      recreated.push([i, sum]);
    }
  }
  return recreated;
}

console.log(listSquared(1, 250));
