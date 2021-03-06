function toDecimal(A) {
  var sum = 0
  for (i = 0; i < A.length; i++) {
    sum = sum + (A[i] * Math.pow(-2, i))
  }

  return sum
}

function toBaseNeg2(number) {
  var array = []

  while (number !== 0) {
    var bit = number % -2
    number = Math.ceil(number / -2)
    array.push(Math.abs(bit))
  }

  return array
}

//return array -X in base -2
function solution(A, B) {
  var number = toDecimal(A)
  return toBaseNeg2(-number)
}

console.log(toDecimal([1,0,0,1,1])     === 9);
console.log(toDecimal([1,1,0,1])       === -9);
console.log(toDecimal([1,0,0,1,1,1])   === -23);
console.log(toDecimal([1,1,0,1,0,1,1]) === 23);

console.log(JSON.stringify(toBaseNeg2(9))   == JSON.stringify([1,0,0,1,1]));
console.log(JSON.stringify(toBaseNeg2(-9))  == JSON.stringify([1,1,0,1]));
console.log(JSON.stringify(toBaseNeg2(-23)) == JSON.stringify([1,0,0,1,1,1]));
console.log(JSON.stringify(toBaseNeg2(23))  == JSON.stringify([1,1,0,1,0,1,1]));
