
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

    for (i = 0; i < A.length; i++) {
        hash[A[i]] = 1

        if (Object.keys(hash).length === X) return i
    }

    return -1
}

//missing positive integer in array
function solution(A) {
    for (i = 1; i <= A.length + 1; i++) {
        if (A.indexOf(i) === -1) return i;
    }
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
