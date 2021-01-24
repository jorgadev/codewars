// random tests not passed

function maxSumDig(nmax, maxsm) {
  let numbers = [];
  for (let i = 1000; i <= nmax; i++) {
    if (
      i
        .toString()
        .split("")
        .reduce((a, b) => parseInt(a) + parseInt(b), 0) <= maxsm
    ) {
      numbers.push(i);
    }
  }
  let amount = numbers.length;
  let sum = numbers.reduce((a, b) => a + b);
  let avg = sum / amount;
  let closest = numbers.reduce((prev, curr) => {
    return Math.abs(curr - avg) < Math.abs(prev - avg) ? curr : prev;
  });

  return [amount, closest, sum];
}

console.log(maxSumDig(3000, 7));
