function to_nato(words) {
  let array = [
    "Alfa",
    "Bravo",
    "Charlie",
    "Delta",
    "Echo",
    "Foxtrot",
    "Golf",
    "Hotel",
    "India",
    "Juliett",
    "Kilo",
    "Lima",
    "Mike",
    "November",
    "Oscar",
    "Papa",
    "Quebec",
    "Romeo",
    "Sierra",
    "Tango",
    "Uniform",
    "Victor",
    "Whiskey",
    "X-ray",
    "Yankee",
    "Zulu",
  ];
  return words
    .split("")
    .map((char) => {
      if (char != "." && char != "!" && char != "?" && char != " ") {
        return `${array.filter((x) => x[0] === char.toUpperCase())} `;
      } else {
        if (char != " ") {
          return `${char} `;
        }
      }
    })
    .join("")
    .slice(0, -1);
}

console.log(to_nato("go for it!"));
