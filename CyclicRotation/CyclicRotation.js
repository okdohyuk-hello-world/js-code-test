// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const A = [1, 2, 3, 4, 5];
const K = 3;

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length <= 1) {
        return A;
    }

    for (let i = 0; i < K; i++) {
        A.unshift(A.pop());
    }

    return A;
}

console.log(solution(A, K));
