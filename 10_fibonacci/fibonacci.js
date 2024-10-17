const fibonacci = function(position) {
  const positionNum = +position
  
  if (positionNum === 0) return 0
  if (positionNum < 0) return 'OOPS'

  let prevNumb = 0
  let nextNum = 1

  for (i = 1; i < position; i++) {
    const number = nextNum
    nextNum += prevNumb
    prevNumb = number
  }

  return nextNum
};

// Do not edit below this line
module.exports = fibonacci;
