const N = 5;
const A = [3, 4, 4, 6, 1, 4, 4];

// 77% max counter의 값으로 set에서 타임아웃
function solution(N, A) {
    let answer = [];

    for (let i = 0; i < N; i++) answer[i] = 0;

    for (let i = 0; i < A.length; i++) {
        if (A[i] <= N) {
            answer[A[i] - 1]++;
        } else {
            answer.fill(Math.max.apply(null, answer));
        }
    }

    return answer;
}

console.log(solution(N, A));
