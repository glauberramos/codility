//find the longest path length of zig zags on a binary tree

var minimal = 0

function solution(N, D, V) {
  if (V > minimal) {
    minimal = V
  }

  if (V === undefined) {
    if (N.right) solution(N.right, 'right', 1)
    if (N.left) solution(N.left, 'left', 1)
  }

  if (N) {
    if (D === 'right') {
        if (N.right) solution(N.right, 'right', 1)
        if (N.left) solution(N.left, 'left', V + 1)
    }

    if (D === 'left') {
        if (N.right) solution(N.right, 'right', V + 1)
        if (N.left) solution(N.left, 'left', 1)
    }
  }

  return minimal
}

console.log(solution({
  value: 3,
  right: {
    value: 1,
    right: {
      value: 3,
      right: {
        value: 6
      },
      left: {
        value: 5,
        right: {
          value: 7
        }
      }
    },
    left: {
      value: 4
    }
  },
  left: {
    value: 2
  }
}))
