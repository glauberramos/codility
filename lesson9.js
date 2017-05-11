//double Slices stack overflow
function solution(A) {
  let maxsum = 0;
  let max_end_at = Array(A.length);
  let max_start_at = Array(A.length);

  max_end_at[0] =  max_start_at[0] = max_start_at[A.length - 1] = max_end_at[A.length - 1] = 0;

  let { max } = Math;

  for (let i = 1; i < A.length - 1; i++) {
    max_end_at[i] = max(0, max_end_at[i - 1] + A[i]);
  }

  for (let n = A.length - 2; n > 0; n--) {
    max_start_at[n] = max(0, max_start_at[n + 1] + A[n]);
  }

  for (let m = 1; m < A.length - 1; m++) {
    maxsum = max(maxsum, max_end_at[m - 1] + max_start_at[m + 1]);
  }

  return maxsum;
}


//maxDoubleslicesum
function solution(A) {
    var max = 0;

    for (i=0; i<=A.length - 4; i++) {
        for(y=3; y<A.length-i;y++) {
            var sum = 0;

            for (z=i+1; z<i+y; z++) {
               sum = sum + A[z];
            }

            for (w=i+1; w<i+y;w++) {
                if (max < sum - A[w]) (max = sum - A[w]);
            }
        }
    }

    return max;
}

//maxProfit
function solution(A) {
    var max = 0;
    for (i=0; i<A.length; i++) {
        for(y=i+1; y<=A.length; y++) {
            if ((A[y] - A[i]) > max) (max = A[y] - A[i]);
        }
    }

    return max;
}

//maxSliceSum
function solution(A) {
    let maxArray = A[0]
    let { max } = Math

    for (i=0; i < A.length; i++) {
        let sum = A[i]
        maxArray = max(maxArray, sum)

        for (x=i+1; x < A.length; x++) {
            sum = sum + A[x]
            maxArray = max(maxArray, sum)
        }
    }

    return maxArray
}
