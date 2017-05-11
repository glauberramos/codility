//eQui leader, divisions of arrays that have same leader
function findMostCommon(array) {
    var map = {};
    var maxCount = 1;
    var maxElem;

    if (array.length === 1) (maxElem = array[0]);

    for (x = 0; x < array.length; x++) {
        if (map[array[x]] === undefined) {
            map[array[x]] = 1;
        } else {
            map[array[x]] = map[array[x]] + 1;

            if (map[array[x]] > maxCount) {
                maxCount = map[array[x]];
                maxElem = array[x];
            }
        }
    }

    if (maxCount >= (Math.floor(array.length / 2) + 1)) {
        return maxElem;
    } else {
        return undefined;
    }
}


function solution(A) {
    var count = 0;

    for (i = 0; i < A.length - 1; i++) {
        var first = A.slice(0, i + 1);
        var second = A.slice(i + 1, A.length);

        var elemFirst = findMostCommon(first);
        var elemSecond = findMostCommon(second);

        if (elemFirst !== undefined && elemSecond !== undefined) {
            if ((elemFirst === elemSecond)) (count++);
        }
    }

    return count;
}

//return index of leader if there is any in array
function solution(array) {
    var map = {};
    var maxCount = 1;
    var maxElem;

    if (array.length === 1) (maxElem = array[0]);

    for (x = 0; x < array.length; x++) {
        if (map[array[x]] === undefined) {
            map[array[x]] = 1;
        } else {
            map[array[x]] = map[array[x]] + 1;

            if (map[array[x]] > maxCount) {
                maxCount = map[array[x]];
                maxElem = array[x];
            }
        }
    }

    if (maxCount >= (Math.floor(array.length / 2) + 1)) {
        return array.indexOf(maxElem);
    } else {
        return -1;
    }
}
