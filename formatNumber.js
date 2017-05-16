/* You are given a String representing a number. Format the string with '.'
	in order to divide, thousands, millions, billions etc without using
    a built-in method
*/

function solution(S) {
  let result = ''

  if (S.length < 4) return S

  S = S.split('').reverse().join('')

  for(i = 0; i < Math.floor(S.length / 3); i++) {
    var piece = S.substring(i * 3, 3 * (i+1))

    result = result + piece + '.'

  }

  result = result + S.substring(Math.floor(S.length / 3) * 3)

  if (result.split('').reverse()[0] === '.') {
    result = result.substring(0, result.length -1)
  }

  return result.split('').reverse().join('')
}

console.log(solution('1000000000'))
console.log(solution('10000000'))
console.log(solution('1000000'))
console.log(solution('100000'))
console.log(solution('10000'))
console.log(solution('1000'))
console.log(solution('100'))
console.log(solution('10'))
console.log(solution('1'))
