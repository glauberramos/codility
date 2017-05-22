//find how many circular primes from 1 to N

function isPrime(numero) {
  for (j = 2; j < numero; j++) {
    if (numero % j === 0) return false
  }

  return numero !== 1
}

function isCircular(num) {
  var array = num.toString().split('')

  for (k = 1; k < array.length; k++) {
    var shift = array.shift()
    array.push(shift)
    var intNum = parseInt(array.join(''))

    if (!isPrime(intNum)) {
      return false
    }
  }

  return true
}

function solution(N) {
  var count = 0

  for (i = 1; i <= N; i++) {
    if (isPrime(i)) {
      if (isCircular(i)) {
        count++
      }
    }
  }

  return count
}

console.log('solution: ' + solution(20))
console.log('solution: ' + solution(50))
console.log('solution: ' + solution(120))
