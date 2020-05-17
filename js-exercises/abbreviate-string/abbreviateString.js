const getFirstChar = (string) => {
  if (typeof string !== "string") {
    throw TypeError(`Expected string. got ${typeof string}`);
  }
  return string.split("")[0];
};

const abbreviateString = (string) => {
  if (typeof string !== "string") {
    throw TypeError(`Expected string. got ${typeof string}`);
  }
  if (string.length === 0) {
    throw TypeError(`Expected a non empty string`);
  }
  const splittedString = string.trim().split(/\s+/);
  const splittedStringLength = splittedString.length;
  if (splittedStringLength === 1) {
    return splittedString[0];
  } else {
    return `${splittedString[0]} ${getFirstChar(
      splittedString[splittedStringLength - 1]
    ).toUpperCase()}.`;
  }
};

export { abbreviateString };
