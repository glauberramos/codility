//missing elem in sequence
function sortArray(a, b) {
    return a - b;
}

function solution(array) {
    if (array.length === []) return 1;

    var sorted = array.sort(sortArray);

    for (i = 0; i <= sorted.length; i++) {
        if (sorted[i] !== i + 1) {
            return i + 1;
        }
    }
}


//frog jump
function solution(X, Y, D) {
    return Math.ceil((Y - X) / D);
}

//find minimal difference of 2 parts of an array
function summing(acc, value) {
    return acc + value;
}

function solution(array) {
    var sumFirst = array.shift();
    var sumSecond = array.reduce(summing)

    var minimalSum = Math.abs(sumFirst - sumSecond);

    while (array.length > 0) {
        var difference = Math.abs(sumFirst - sumSecond);
        if (difference < minimalSum) {
            minimalSum = difference;
        }

        var element = array.shift();
        sumFirst = sumFirst + element;
        sumSecond = sumSecond - element;
    }

    return minimalSum;
}
