const palindromes = function (str) {
  const filteredArray = str.toLowerCase().split("").filter((letter) => !['!', ',', '.', '?', ' '].includes(letter) )
  const originalStr = filteredArray.join("")
  
  return originalStr === filteredArray.reverse().join("")
};

// Do not edit below this line
module.exports = palindromes;
