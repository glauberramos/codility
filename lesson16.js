//maxNonOverlappingSegments
function solution(A, B) {
    var end = B[0]
    var count = 1

    if (A.length === 0) return 0

    for (i = 1; i < A.length; i++) {
        if (A[i] > end) {
            end = B[i]
            count++
        }
    }

    return count
}
