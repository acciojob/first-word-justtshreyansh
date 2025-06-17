function firstWord(str) {
  // your code here
	if (!str) return '';  // Handle empty or falsy input

  const index = str.indexOf(' ');
  if (index === -1) {
    return str; // No space found, return whole string
  }

  return str.slice(0, index);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
