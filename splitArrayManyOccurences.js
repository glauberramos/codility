//Task 1 Your function takes an array of integers (arr), and an integer (x).
//You need to find the position in arr that splits the array in two, where one side has as many occurrences of x as the other side
//has occurrences of any number but x
//So, given an array like this: [5, 5, 2, 3, 5, 1, 6] and x being "5", the function should return "4" (Position 4, holding
//the number "3" above is the point where you have 2 5's on the one side, and two "not fives" on the other.

function solution(X, A) {
    var numberOfX = A.filter(function(value) {
      return value === X
    }).length

    var count = 0

    for (i = 0; i < A.length; i ++) {
      var secondHalfLength = A.length - (i + 1)
      var missingXs = numberOfX - count

      if (count === (secondHalfLength - missingXs)) return i

          if (A[i] === X) count++
    }

    return -1
  }

  console.log(solution(5, [5, 5, 2, 3, 5, 1, 6]))
  console.log(solution(4, [4, 4, 2, 3, 5, 1, 6, 4, 1, 3]))
  console.log(solution(3, [3,3,1,3,2,1]))
