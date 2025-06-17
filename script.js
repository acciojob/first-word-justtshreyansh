function firstWord(str) {
  if (!str) return ''; // handle empty input gracefully

  const trimmedStr = str.trim(); // remove leading/trailing whitespace
  const index = trimmedStr.indexOf(' ');

  if (index === -1) {
    return trimmedStr; // only one word present
  }

  return trimmedStr.slice(0, index);

}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
