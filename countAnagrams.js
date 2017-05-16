function solution(W, A) {
  let count = 0

  for (i = 0; i < A.length; i++) {
    if (JSON.stringify(A[i].split('').sort()) === JSON.stringify(W.split('').sort())) {
      count++
    }
  }

  return count
}

console.log(solution("mellon", ["apples", "nollem", "llomen", "house", "car", "ellonm"]))
