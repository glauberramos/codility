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

//check when is earliest that flog reach the end
function solution(X, A) {
    var lastSecond = 0;

    for (i = 1; i <= X; i++) {
        var index = A.indexOf(i);
        if (index > lastSecond) (lastSecond = index);
        if (index === -1) return -1;
    }

    return lastSecond;
}
