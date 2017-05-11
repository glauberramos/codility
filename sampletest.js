function solution(A) {
    if (A.length === 0) return -1
    if (A.length === 1) return 0

    var pivot = A.shift()
    var index = 0
    var firstHalf = 0
    var secondHalf = A.reduce(function(acc, val) {
        return acc + val
    })

    if (firstHalf === secondHalf) return index

    while (A.length > 0) {
        firstHalf = firstHalf + pivot
        pivot = A.shift()
        secondHalf = secondHalf - pivot
        index++

        if (firstHalf === secondHalf) return index
    }

    return -1
}
