//countFactors
function solution(N) {
    let count = 0

    for (i=1; i<= N; i++) {
        if (Number.isInteger(N/i)) count++;
    }

    return count
}

//minperimeterrectangle
function solution(N) {
    let i = 1
    let perimeter = 2 * (1 + N)
    let {min} = Math

    for (i = 1; i <= N/2; i++) {
        if (N % i === 0) {
            perimeter = min(perimeter, 2 * ((N/i) + i))
        }
    }

    return perimeter
}

//count max number of blocks with peaks
function createPeaks(array) {
    var peaksArray = Array(array.length)

    array.map(function(value, index) {
        if (index > 0 &&
            (index < array.length -1) &&
            (value > array[index - 1]) &&
            (value > array[index + 1])
        ) {
            peaksArray[index] = 1
        } else {
            peaksArray[index] = 0
        }
    });

    return peaksArray;
}

function solution(A) {
    var divider = 1
    var biggerDivider = 0;
    var peaksArray = createPeaks(A);
    var cantBeDivided = true;

    while (A.length / divider > 2) {
        if (A.length % divider === 0 ) {
            cantBeDivided = false
            var allHavePeaks = true;

            for (i = 1; i <= divider; i++) {
                var subArray = peaksArray.slice((i-1)*A.length/divider, (i*(A.length/divider)));
                if (subArray.indexOf(1) === -1) (allHavePeaks = false);
            }

            if (allHavePeaks) (biggerDivider = divider);
        }

        divider++;
    }

    return biggerDivider;
}

//finds max number of flags to put on peaks
function createPeaks(array) {
    var peaksArray = Array(array.length)

    array.map(function(value, index) {
        if (index > 0 &&
            (index < array.length -1) &&
            (value > array[index - 1]) &&
            (value > array[index + 1])
        ) {
            peaksArray[index] = 1
        } else {
            peaksArray[index] = 0
        }
    });

    return peaksArray;
}

function solution(A) {
    var peaksArray = createPeaks(A);
    var maxNumberFlags = 1
    var numberFlags = 1;

    if (peaksArray.indexOf(1) === -1) return 0;

    while (maxNumberFlags === numberFlags) {
        numberFlags++
        maxNumberFlags = 1
        var lastFlagPosition = peaksArray.indexOf(1)

        for (j = 0; j < A.length; j++) {
            if (peaksArray[j] === 1 && Math.abs(lastFlagPosition - j) >= numberFlags) {
                maxNumberFlags++
                lastFlagPosition = j
                if (maxNumberFlags === numberFlags) break;
            }
        }
    }

    return numberFlags-1
}
