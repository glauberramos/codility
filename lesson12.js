//eating chocolates
function solution(N, M) {
    var current = 0
    var array = new Array(N).fill(1)

    while (array[current] > 0) {
        if (array[current] === 1) {
            array[current] = 0
        }

        current = (current + M) % N
    }

    return array.filter(function(a) { return a === 0;}).length
}

//common prime divisors
function findPrimeDivisors(value) {
    var divisors = [];
    var current = 2

    if (value === 1) return false

    while (value > 1) {
        if (value % current === 0) {
            value = value / current
            if (divisors.indexOf(current) === -1) divisors.push(current)
        } else {
            current++
        }
    }

    return divisors;
}


function solution(A, B) {
    var count = 0

    for (i = 0; i < A.length; i++) {
        if (JSON.stringify(findPrimeDivisors(A[i])) === JSON.stringify(findPrimeDivisors(B[i]))) (count++);
    }

    return count
}
