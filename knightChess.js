//Task 3 For this one the description was straight forward, but the implementation
//kicked my butt. "You have an infinite chessboard, and a knight.
//The knight starts at [0, 0] and can move [like a knight moves, skipped for
// brevity]. Given two coordinates on the board, return the least amount of moves
//the knight has to make to get to that position". I only had 50min when I
//started on this one, but even that wasn't enough for me to get even close
//to a solution. I tried like 10 different things that didn't work, deleted
//them, started over, etc; and at the end I had pretty much nothing.

function solution (x, y) {
     // axes symmetry
     var X = Math.abs(x);
     var Y = Math.abs(y);

     // 2 corner cases
     if(X == 1 && Y === 0){
        return 3;
     }

     if(X == 2 && Y == 2){
        return 4;
     }

    // main formula
    var delta = X - Y;

	if(Y > delta){
  		return delta -  parseInt((2 * Math.floor((delta - Y)/3)));
  	}
  	else {
  		return delta - parseInt((2 * Math.floor((delta - Y)/4)));
  	}
}

console.log(solution(2, 2))
console.log(solution(1, 1))
console.log(solution(6, 19))
console.log(solution(10, 10))
console.log(solution(1, 1))



//not 100% solution
function solution (x, y) {
  let kx = 0, ky = 0;

  // axes symmetry
  x = Math.abs(x);
  y = Math.abs(y);

  // diagonal symmetry
  if (x < y) {
    let t = x; x = y; y = t;
  }

  let count = 0

  while (x - kx > 1 || y - ky > 1) {
    if (((x - kx) > (y - ky)) || ((x - kx) === (y - ky)) ) {
      kx = kx + 2
      ky = ky + 1
      count++
    }

    if (((x - kx) < (y - ky))) {
       kx = kx + 1
      ky = ky + 2
      count++
    }
  }

  return count
}

console.log(solution(2, 4))
console.log(solution(4, 5))
console.log(solution(6, 19))
console.log(solution(10, 10))
console.log(solution(1, 1))
