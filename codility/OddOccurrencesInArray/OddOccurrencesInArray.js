// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const A = [9, 3, 9, 3, 9, 7, 9];

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let answer = 0;

    for (let i = 0; i < A.length; i++) {
        answer = answer ^ A[i];
    }

    return answer;
}

console.log(solution(A));
