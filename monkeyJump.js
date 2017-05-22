//find the early time a monkey can cross the river when all stones are outside the water

function findSmallerPath(currentIndex, N, A) {
  var smallerTimeIndex

  if (currentIndex + N >= A.length) {
    return A.length;
  }

  for (i = 1; i <= N; i++) {
    if (smallerTimeIndex === undefined && A[currentIndex + i] > -1) {
      smallerTimeIndex = currentIndex + i
    }

    if (A[currentIndex + i] < A[smallerTimeIndex] && A[currentIndex + i] > -1) {
      smallerTimeIndex = currentIndex + i
    }
  }

  return smallerTimeIndex
}

function solution(N, A) {
  let currentIndex = -1
  let currentTime = 0

  while (currentIndex < A.length) {
    const nextIndex = findSmallerPath(currentIndex, N, A)

    if (nextIndex === undefined) return -1

    if (nextIndex < A.length && A[nextIndex] > currentTime) {
      currentTime = A[nextIndex]
    }

    currentIndex = nextIndex

  }

  return currentTime
}

console.log(solution(3, [1, -1, 0, 2, 3, 5]))
console.log(solution(3, [1, -1, 0, 2, 3, 5, 4, 6, 7, -1, -1, 8]))
console.log(solution(4, [1, -1, -1, -1, 0, 2, 3, 5, 4, 6, 7, -1, -1, 8]))
console.log(solution(3, [1, -1, -1, -1, 0, 2, 3, 5, 4, 6, 7, -1, -1, 8]))
console.log(solution(3, [1, -1, 0, 2, 3, 5, 4, 12, 7, -1, -1, 8, 9, 10, -1, -1, 6]))
