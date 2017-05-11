//ladder
function getKFibo(K) {
     var first = Math.pow(1.618034, K+1)
     var second = Math.pow(-0.618034, K+1)
     var third = Math.sqrt(5)

    return Math.round((first - second) / third)
}

function solution(A, B) {
    var result = []

    for (j = 0; j < A.length; j++) {
        result[j] = getKFibo(A[j]) % Math.pow(2, B[j])
    }

    return result
}

//frog fibo
function getNextFibo(K) {
    var first = Math.pow(1.618034, K)
    var second = Math.pow(-0.618034, K)
    var third = Math.sqrt(5)

    return Math.round((first - second) / third)
}

function solution(A) {
    var currentPos = -1
    var count = 0
    var fibo
    var possibleJump

    while (currentPos < A.length) {
        fibo = 1
        possibleJump = -1

        while ((currentPos + getNextFibo(fibo)) < (A.length + 1)) {
            var isMiddleArray = A[currentPos + getNextFibo(fibo)] === 1
            var isLastPosition = (currentPos + getNextFibo(fibo)) === A.length

            if (isMiddleArray || isLastPosition) {
                //console.log('fibo: ', getNextFibo(fibo))
                //console.log('currentPos: ', currentPos)
                possibleJump = currentPos + getNextFibo(fibo)
                //console.log('possibleJump: ', possibleJump)
            }

            fibo++
        }

        if (possibleJump !== -1) {
            currentPos = possibleJump
            count++
        } else {
            break;
        }

        //console.log('******** currentPos: ', currentPos)
        //console.log('******** count: ', count)
    }

    if (currentPos === A.length) return count

    return - 1
}
