// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const N = 100663296;

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let answer = null;
    let Binary = N.toString(2).split("");
    let GapPoint = [];
    let GapCount = [];

    for (let i = 0; i < Binary.length; i++) {
        if (Binary[i] === "1") {
            GapPoint.push(i);
        }
    }

    if (GapPoint.length <= 1) {
        return 0;
    }

    for (let i = 0; i < GapPoint.length - 1; i++) {
        GapCount.push(Binary.slice(GapPoint[i] + 1, GapPoint[i + 1]).length);
    }

    answer = Math.max.apply(null, GapCount);

    return answer;
}

console.log(solution(N));
