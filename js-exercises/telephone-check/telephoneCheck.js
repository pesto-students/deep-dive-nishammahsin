
const telephoneCheck = () => {
  if(typeof phoneNumber !== 'string') {
    throw TypeError(`Expected string. got ${typeof phoneNumber}`);
  }
  const re = new RegExp(/^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/)
  return re.test(phoneNumber)
 
}

export { telephoneCheck };

