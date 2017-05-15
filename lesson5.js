//CountDiv lesson 5
function solution(A, B, K) {
    var more = A % K === 0 && B % K === 0 ? 1 : 0;
    return Math.ceil((B - A) / K) + more;
}

//PassingCars lesson 5
function solution(A) {
    var numberOfOnes = A.reduce(function(acc, value) {
        if (value === 1) {
            return acc + value;
        }

        return acc
    })

    var counter = 0

    for (i = 0; i < A.length; i++) {
        if (A[i] === 1) {
            numberOfOnes--
        } else {
            counter = counter + numberOfOnes
        }

        if (counter > 1000000000) return -1
    }

    return counter;
}

//GenomicRangeQuery  lesson 5
function solution(input, P, Q) {
    input = input.replace(/A/g, 1);
    input = input.replace(/C/g, 2);
    input = input.replace(/G/g, 3);
    input = input.replace(/T/g, 4);

    var returnArray = [];

    for (i = 0; i < P.length; i++) {
        var sub = input.slice(P[i], Q[i]+1);
        var smallest = sub.split('').sort()[0];
        returnArray.push(parseInt(smallest));
    }

    return returnArray;
}
