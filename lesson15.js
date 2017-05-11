//absDistinct
function solution(A) {
    var result = {}

    A.map(function(value) {
        if (!result[Math.abs(value)]) {
            result[Math.abs(value)] = 1
        }
    })

    return Object.keys(result).length
}

//countTriangles
function solution(A) {
    var count = 0
    var element = A.pop()

    while (A.length > 0) {
        for (i = 0; i < A.length - 1; i++) {
            for (j = i + 1; j < A.length; j++) {
                if (element + A[i] > A[j] &&
                    element + A[j] > A[i] &&
                    A[i] + A[j] > element) {
                    count++
                }
            }
        }

        element = A.pop()
    }

    return count
}

//count triangles
function sortMe(a, b) {
    return a - b
}

function solution(A) {
    if (A.length < 3) {
        return 0;
    }

    var r;
    var count = 0;

    A = A.sort(sortMe);

    for (p = 0; p < A.length - 2; p++) {
        r = p + 2;
        for (q = p + 1; q < A.length - 1; q++) {
            while (r < A.length && ((A[p] + A[q] > A[r])
                    && (A[q] + A[r] > A[p])
                    && (A[r] + A[p] > A[q]))) {
                r++;
            }

            count += r - q - 1;
        }
    }

    return Math.abs(count);
}

//countDistinctSlices
function solution(M, A) {
    var count = 0

    for (i = 0; i < A.length - 1; i++) {
        var array = [A[i]]
        var unique = {}
        unique[A[i]] = 1

        for (j = i + 1; j < A.length; j++) {
            array.push(A[j])
            if (!unique[A[j]]) (unique[A[j]] = 1)
            if (Object.keys(unique).length === array.length) {
                count++
            }
        }
    }

    count = count + A.length

    return count
}
