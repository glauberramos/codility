// Return the index K where you divide and array and the sum of each part is the same as the other part

function dividePoint(array) {
  var leftSum = array.reduce(function(a, b) { return a + b;});
  var rightSum = 0

  for(i = 1; i < array.length; i++) {
    leftSum = leftSum - array[i-1]
    rightSum = rightSum + array[i-1]
    
    if(rightSum === leftSum) return i;
  }
}

console.log(dividePoint([2, -3, 1, 5, -3, -2]))
console.log(dividePoint([2, 2, 1, 1, 1, 1]))
console.log(dividePoint([10, 5, 2, 1, 3, -1]))
console.log(dividePoint([10, -10, 2, 1, 10, 13]))
