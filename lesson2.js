//odd occurrence in array
function solution(array) {
    var hash = {}

    if (array.length === 1) {
        return array[0]
    }

    for (i = 0; i < array.length; i++) {
        if (hash[array[i]] === undefined) {
            hash[array[i]] = 1
        } else {
            delete hash[array[i]]
        }
    }

    return parseInt(Object.keys(hash)[0])
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
