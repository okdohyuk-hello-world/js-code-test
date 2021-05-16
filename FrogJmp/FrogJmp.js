const X = 10; // 현재 위치
const Y = 85; // 목표 위치
const D = 30; // 한 번에 뛰는 거리

/* 33%
function solution(X, Y, D) {
    for (let i = 0; X <= Y; i++) {
        X += D;
        if (X >= Y) {
            return i + 1;
        }
    }
} 
*/

// 100%
function solution(X, Y, D) {
    return Math.ceil((Y - X) / D);
}

console.log(solution(X, Y, D));
