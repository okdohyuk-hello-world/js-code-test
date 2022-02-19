// 55%

const A = [1, 2, 3];

function solution(A) {
    let answer = [];
    const tempA = Array.from(new Set(A.sort((a, b) => a - b)));
    const maxA = Math.max.apply(null, tempA);
    let B = [1];

    for (let i = 0; i < maxA; i++) {
        B.push(i + 1);
    }

    answer = B.filter((value) => !tempA.includes(value));

    if (answer.length === 0) {
        return maxA + 1;
    } else {
        return answer[0];
    }
}

console.log(solution(A));
