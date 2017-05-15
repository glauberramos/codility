function toDecimal(A) {
  var sum = 0
  for (i = 0; i < A.length; i++) {
    sum = sum + (A[i] * Math.pow(-2, i))
  }

  return sum
}

function toBaseNeg2(digit) {
  var array = []

  while (digit !== 0) {
    var remainder = digit % -2
    digit = Math.ceil(digit / -2)
    array.push(Math.abs(remainder))
  }

  return array
}

//return array -X in base -2
function solution(A, B) {
  var digit = toDecimal(A)
  return toBaseNeg2(-digit)
}

console.log(toDecimal([1,0,0,1,1])     === 9);
console.log(toDecimal([1,1,0,1])       === -9);
console.log(toDecimal([1,0,0,1,1,1])   === -23);
console.log(toDecimal([1,1,0,1,0,1,1]) === 23);

console.log(JSON.stringify(toBaseNeg2(9))   == JSON.stringify([1,0,0,1,1]));
console.log(JSON.stringify(toBaseNeg2(-9))  == JSON.stringify([1,1,0,1]));
console.log(JSON.stringify(toBaseNeg2(-23)) == JSON.stringify([1,0,0,1,1,1]));
console.log(JSON.stringify(toBaseNeg2(23))  == JSON.stringify([1,1,0,1,0,1,1]));
