const negate = a => {
/*   const result = !a;
  return result; */
  return (!a);
};

const both = (a, b) => {
  if (a && b == true)
  {return true;}
  else {return false;}
};

const either = (a, b) => {
  if (a || b == true)
  {return true;}
  else {return false;}
};

const none = (a, b) => {
  if (a == false && b == false) 
  {return true;}
  else {return false;}
};

const one = (a, b) => {
  if ((a == true && b ==false) || (a == false && b == true))
  {return true;}
  else {return false;}
};

const truthiness = a => {
  if (a)
  {return true;}
  else {return false;}
};

const isEqual = (a, b) => {
  if (a == b)
  {return true;}
  else {return false;}
};

const isGreaterThan = (a, b) => {
  if (a > b)
  {return true;}
  else {return false;}
};

const isLessThanOrEqualTo = (a, b) => {
  if (a <= b)
  {return true;}
  else {return false;}
};

const isOdd = a => {
  if (a % 2 === 1)
  {return true;}
  else {return false;}
};

const isEven = a => {
  if (a % 2 === 0)
  {return true;}
  else {return false;}
};

const isSquare = a => {
  if (Number.isInteger(Math.sqrt(a)))
  {return true;}
  else {return false;}
};

const startsWith = (char, string) => {
  if (string[0] === char)
  {return true;}
  else {return false;}
};

const containsVowels = string => {
  const lowerString = string.toLowerCase();
  console.log(lowerString);
  let vowelCount = 0;
  for (let i = 0; i < string.length; i++) {
    if (lowerString[i] === ("a" || "e" || "i" || "o" || "u")) {
      vowelCount++;
    }
  }
  console.log(vowelCount);
  if (vowelCount > 0) {
    return true;
  } else {
    return false;
  }

};

const isLowerCase = string => {
 if (string === string.toLowerCase())
 {return true;}
 else {return false;}
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
