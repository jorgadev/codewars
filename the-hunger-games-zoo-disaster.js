// not passed all tests

const rules = [
  "antelope eats grass",
  "big-fish eats little-fish",
  "bug eats leaves",
  "bear eats big-fish",
  "bear eats bug",
  "bear eats chicken",
  "bear eats cow",
  "bear eats leaves",
  "bear eats sheep",
  "chicken eats bug",
  "cow eats grass",
  "fox eats chicken",
  "fox eats sheep",
  "giraffe eats leaves",
  "lion eats antelope",
  "lion eats cow",
  "panda eats leaves",
  "sheep eats grass",
];

let whoEatsWho = function (zoo) {
  let mainArr = [zoo];
  let zooArr = zoo.split(",").map((item) => item.trim());
  let i = 0;
  while (i < zooArr.length) {
    if (rules.includes(`${zooArr[i]} eats ${zooArr[i - 1]}`)) {
      mainArr.push(`${zooArr[i]} eats ${zooArr[i - 1]}`);
      zooArr = zooArr.filter((animal) => animal != zooArr[i - 1]);
      i = 0;
    } else if (rules.includes(`${zooArr[i]} eats ${zooArr[i + 1]}`)) {
      mainArr.push(`${zooArr[i]} eats ${zooArr[i + 1]}`);
      zooArr = zooArr.filter((animal) => animal != zooArr[i + 1]);
      i = 0;
    } else {
      i++;
    }
  }
  mainArr.push(zooArr[0]);
  return mainArr;
};

console.log(whoEatsWho("fox, bug, chicken, grass, sheep"));
