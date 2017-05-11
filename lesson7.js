//check if string is perfect with ([{
function solution(S) {
    var map = {')': '(', ']': '[', '}': '{', '(': '', '[': '', '{': ''};
    var string = S.split('');
    var temp = [string.shift()];

    if (S === '') return 1;

    string.map(function(value) {
        if (map[value] === temp[temp.length - 1]) {
            temp.pop();
        } else {
            temp.push(value);
        }
    });

    if (temp.length === 0) return 1;

    return 0;
}

//fishs going down or up the stream eating itself
function solution(A, B) {
    var map = A.map(function(value, index) {
        return { wei: value, dir: B[index] }
    });
    var temp = [map.pop()];

    while (map.length > 0) {
        if (map[map.length-1].dir === temp[0].dir) {
            temp.unshift(map.pop());
        } else {
            if (map[map.length-1].dir === 1) {
                if (map[map.length-1].wei < temp[0].wei) {
                    map.pop();
                } else {
                    temp.shift();
                    if (temp.length === 0) temp.unshift(map.pop());
                }
            } else {
                temp.unshift(map.pop());
            }
        }
    }

    return temp.length;
}

//(()) strings
function solution(S) {
    var string = S.split('');
    var temp = [string.shift()];

    if (S === '') return 1;

    string.map(function(value) {
        if (value === ')' && temp[temp.length - 1] === '(') {
            temp.pop();
        } else {
            temp.push(value);
        }
    });

    if (temp.length === 0) return 1;

    return 0;
}

//mount blocks on top of each other, minimal blocks
function solution(H) {
    var blocks = 0;
    var blocked = new Array(H.length).fill(0);

    for (i = 0; i < H.length; i++) {
        if (blocked[i] !== H[i]) {
            blocks++;
        }

        blocked[i] = H[i];

        for (x = i; x <= H.length; x++) {
            if (H[x] >= H[i]) {
                blocked[x] = H[i]
            } else {
                break;
            }
        }
    }

    return blocks;
}
