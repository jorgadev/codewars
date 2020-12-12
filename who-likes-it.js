function likes(names) {
  let str = "";
  if (names.length < 1) {
    return "no one likes this";
  } else if (names.length == 1) {
    return `${names[0]} likes this`;
  } else if (names.length < 4) {
    names.forEach((name, i) => {
      if (i == names.length - 2) {
        str += `${name} and `;
      } else if (i == names.length - 1) {
        str += `${name} like this`;
      } else {
        str += `${name}, `;
      }
    });
    return str;
  } else {
    names.forEach((name, i) => {
      if (i == 0) {
        str += `${name}, `;
      } else if (i == 1) {
        str += `${name} and ${names.length - 2} others like this`;
      }
    });
    return str;
  }
}

console.log(likes(["Max", "John", "Mark", "Alex", "Jacob"]));
