//number of semiprimes
function isItSemiPrime(value) {
    var divisors = [];
    var current = 2

    if (value === 1) return false

    while (value > 1) {
        if (value % current === 0) {
            value = value / current
            divisors.push(current)
        } else {
            current++
        }
    }

    if (divisors.length === 2) return true

    return false
}

function solution(N, P, Q) {
    var result = []

    for (j = 0; j < P.length; j++) {
        var count = 0

        for (x = P[j]; x <= Q[j]; x++) {
            if (x > N) break;
            if (isItSemiPrime(x) === true) (count++);
        }

        result.push(count)
    }

    return result;
}

//find not dividers in array
function solution(A) {
    var count
    var result = []

    for (i = 0; i < A.length; i++) {
        count = 0

        for (y = 0; y < A.length; y++) {
            if ((i !== y) && (A[i] % A[y] !== 0)) {
                count++;
            }
        }

        result.push(count)
    }

    return result;
}
