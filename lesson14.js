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

//minMaxDivision
function solution(maxNumBlocks, M, array) {
  var lowerSum = Math.max.apply(null, array) //pega o maior elemento do array
  var upperSum = array.reduce((a, c) => a + c, 0) //soma todo array
  var result = -1

  while (lowerSum <= upperSum) {
    var tentativeSum = Math.floor((lowerSum + upperSum) / 2) //binary search, soma maior e menor e divide por dois

    if (tentativeSumIsPossible(array, maxNumBlocks, tentativeSum)) {
      result = tentativeSum
      upperSum = tentativeSum - 1
    } else {
      lowerSum = tentativeSum + 1
    }
  }

  return result
}

//check if it has a valid block with the tentative
function tentativeSumIsPossible(array, maxNumBlocks, tentativeSum) {
  var curBlockSum = 0
  var numBlocks = 1

  for (let elem of array) {
    //se ainda cabe aumenta o currentblock
    if (curBlockSum + elem <= tentativeSum) {
      curBlockSum += elem
    //se não cria outro block
    } else {
      numBlocks++
      curBlockSum = elem
    }

    if (numBlocks > maxNumBlocks) return false
  }

  return true
}
