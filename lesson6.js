//elementos únicos num array
function solution(A) {
    var seen = {};
    return A.filter(function(value) {
       return seen.hasOwnProperty(value) ? false : (seen[value] = true);
    }).length;
}


//maior tripla
function sortArray(a, b) {
    return b - a;
}

function solution(A) {
    var sortedArray = A.sort(sortArray);
    var length = sortedArray.length;

    var solutions = []
    solutions.push(sortedArray[0] * sortedArray[1] * sortedArray[2])
    solutions.push(sortedArray[0] * sortedArray[1] * sortedArray[length - 1])
    solutions.push(sortedArray[length - 1] * sortedArray[length - 2] * sortedArray[length - 3])
    solutions.push(sortedArray[length - 1] * sortedArray[length - 2] * sortedArray[0])

    return solutions.sort(sortArray)[0];
}

//find triangle
function sortArray(a, b) {
    return b - a;
}

function solution(array) {
    var sortedArray = array.sort(sortArray);

    for (i = 0; i < sortedArray.length - 2; i++) {
        if ((sortedArray[i] + sortedArray[i + 1] > sortedArray[i + 2]) &&
            (sortedArray[i + 1] + sortedArray[i + 2] > sortedArray[i]) &&
            (sortedArray[i] + sortedArray[i + 2] > sortedArray[i + 1])) {
            return 1;
        }
    }

    return 0;
}

//find intersections
function solution(array) {
    var arrays = [];
    var count = 0;

    array.map(function(value, index) {
        var newArray = [];

        for (i = index - value; i <= index + value; i ++) {
            newArray.push(i);
        }

        arrays.push(newArray);
    });

    var current = arrays.pop();

    while (arrays.length > 0) {
        arrays.map(function(value, index) {
            var filter = value.filter(function(n) {
                return current.indexOf(n) > -1;
            });

            if (filter.length > 0) {
                count++;
            }
        });

        current = arrays.pop();
    }

    return count;
}
