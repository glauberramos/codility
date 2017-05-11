//odd occurrence in array

function sortArray(a, b) {
    return a - b;
}

function solution(array) {
    var sorted = array.sort(sortArray);

    if (sorted[0] !== sorted[1]) {
        return sorted[0];
    }

    if (sorted[sorted.length - 1] !== sorted[sorted.length - 2]) {
        return sorted[sorted.length - 1];
    }

    for (i = 1; i < sorted.length - 1; i++) {
        if ((sorted[i - 1] !== sorted[i]) && (sorted[i + 1] !== sorted[i])) {
            return sorted[i];
        }
    }
}

//solution 2
function solution(array) {

    if (array.length === 1) {return array[0] };

    for (i = 0; i < array.length; i++) {
        var value = array[i];
        if (array.indexOf(value) === array.lastIndexOf(value)) {
            return value;
        }
    }
}

//cycled solution pop and unshift k times
function solution(A, K) {
    if (A.length === 0) return A;

    for (i = 1; i <= K; i++) {
        var element = A.pop();
        A.unshift(element);
    }

    return A;
}
