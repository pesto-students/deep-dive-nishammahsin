
const telephoneCheck = () => {
  if(typeof phoneNumber !== 'string') {
    throw TypeError(`Expected string. got ${typeof phoneNumber}`);
  }
  const pattern = new RegExp(/^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/)
  return pattern.test(phoneNumber)
 
}

export { telephoneCheck };

