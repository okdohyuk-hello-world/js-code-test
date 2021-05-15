# CodilityDemo

출처: [https://app.codility.com/programmers/lessons](https://app.codility.com/programmers/lessons)

### 문제 설명

This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].

### 나의 풀이

```javascript
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
```
