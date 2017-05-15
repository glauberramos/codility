
//PermCheck
function sortArray(a, b) {
    return a - b;
}

function solution(A) {
    A = A.sort(sortArray)

    for (i = 0; i < A.length; i++) {
        if (A[i] !== (i + 1)) return 0
    }

    return 1
}

// FrogRiverOne
function solution(X, A) {
    var hash = {}
    var count = 0

    for (i = 0; i < A.length; i++) {
        if (hash[A[i]] === undefined) {
            hash[A[i]] = 1
            count++
        }

        if (count === X) return i
    }

    return -1
}

//missing positive integer in array
function sortArray(a, b) {
    return a - b;
}

function solution(A) {
    A = A.sort(sortArray)
    var minimal = 0

    for (i = 0; i < A.length; i++) {
        if (A[i] > minimal + 1) {
            return minimal + 1
        } else {
            if (A[i] > 0) {
                minimal = A[i]
            }
        }
    }

    return minimal + 1
}

//max Counters
function solution(N, A) {
    var newArray = new Array(N).fill(0)
    var biggest = 0

    for (i = 0; i < A.length; i++) {
        if (A[i] <= N) {
            const value = newArray[A[i] - 1] + 1
            newArray[A[i] - 1] = value

            if (value > biggest) {
                biggest = value
            }
        }

        if (A[i] === (N + 1)) {
            newArray = newArray.fill(biggest)
        }
    }

    return newArray;
}

//show missing value in permutation
function sortArray(a, b) {
    return a - b;
}

function filterArray(a, index, array) {
    if (array.indexOf(a) === array.lastIndexOf(a)) return 1;
}

function solution(A) {
    A = A.sort(sortArray).filter(filterArray);

    if ((A[0] === 1) && (A[A.length - 1] === A.length)) return 1;

    return 0;
}
