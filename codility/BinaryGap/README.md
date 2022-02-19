# BinaryGap

출처: [https://app.codility.com/programmers/lessons](https://app.codility.com/programmers/lessons)

### 문제 설명

A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

class Solution { public int solution(int N); }

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].

### 나의 풀이

```javascript
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
```

### 배운 점

처음 영문으로 된 알고리즘이어서 낯설지는 않을까 걱정했지만, 번역기를 사용하여 쉽게 이해할 수 있었다. 점점 영어로 읽는 습관을 들여야겠다.

레슨 1이어서 그런지 총 점수가 100%가 나와서 기뻤다. 혹여나 시간이 오래 걸려서 점수가 낮아질까 걱정하였지만, 다행이다. 다른 문제들도 100%를 노리면서 문제를 풀어나가야겠다.
