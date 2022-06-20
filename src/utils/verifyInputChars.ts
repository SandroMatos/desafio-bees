function verifyChar(char: string) {
  const pattern = /^[A-Za-z]+$/;

  if (isNaN(parseInt(char))) {
    if (char.match(pattern) || char === " " || char === "") {
      return char;
    }
  }

  return;
}

export default verifyChar;
