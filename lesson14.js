//nails blank
function solution(A, B, C) {
    var arrays = []
    var nailed = {}

    A.map(function(value, index) {
        var newArray = []
        for (i = A[index]; i <= B[index]; i++) {
            newArray.push(i)
        }

        arrays.push(newArray)
    })

    for (j = 0;j < C.length; j++) {
        arrays.map(function(plank, index) {
            if (plank.indexOf(C[j]) > -1) {
                nailed[index] = true
            }
        })

        if (Object.keys(nailed).length === arrays.length) return j + 1
    }

    return -1
}

//nail 2
function solution(A, B, C) {
    var arrays = []
    var nailed = {}

    A.map(function(value, index) {
        var newArray = []
        for (i = A[index]; i <= B[index]; i++) {
            newArray.push(i)
        }

        arrays.push(newArray)
    })

    for (j = 0;j < C.length; j++) {
        for (x = 0; x < arrays.length; x++) {
            if (arrays[x].indexOf(C[j]) > -1) {
                nailed[x] = true

                if (Object.keys(nailed).length === arrays.length) return j + 1
            }
        }
    }

    return -1
}
