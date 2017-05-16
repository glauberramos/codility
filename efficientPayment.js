
/* You have a sum of money X in your pocket. After you go shopping and pay the
groceries with some of that money, you have a sum Y. How can you express that
sum Y in a way that you use the least amount of dollar bills and coins ?
   For example, X = 10 bucks. You pay 5.35 bucks to the grocery. The most
   efficient way to represent 4.65 that remained is : 4 one dollar bills,
   1 fifty pence coin, 1 ten pence coin and 1 five pence coin

   Keep in mind, we only have the following penny coins : 50, 20, 10, 5, 1

   Plus we have the dollar bill

   How do we most efficiently express the sum of money that remained ?
*/

function solution(A) {
  result = ''

  //1 dollar
  result = result + ' ' + Math.floor(A) + ' dollars ';
  var floatNumber = parseInt((A + '').split('.')[1])

  //50 cents
  result = result + ' ' + Math.floor(floatNumber / 50) + ' X 50 cents ';
  floatNumber = floatNumber - (Math.floor(floatNumber / 50) * 50)

  //20 cents
  result = result + ' ' + Math.floor(floatNumber / 20) + ' X 20 cents ';
  floatNumber = floatNumber - (Math.floor(floatNumber / 20) * 20)

  //10 cents
  result = result + ' ' + Math.floor(floatNumber / 10) + ' X 10 cents ';
  floatNumber = floatNumber - (Math.floor(floatNumber / 10) * 10)

  //5 cents
  result = result + ' ' + Math.floor(floatNumber / 5) + ' X 5 cents ';
  floatNumber = floatNumber - (Math.floor(floatNumber / 5) * 5)


  //1 cents
   result = result + ' ' + Math.floor(floatNumber) + ' X 1 cents ';
  floatNumber = floatNumber - (Math.floor(floatNumber))


  return result
}

console.log(solution(4.65))
console.log(solution(10.99))
