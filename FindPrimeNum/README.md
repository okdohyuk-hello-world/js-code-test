# 소수 찾기

출처: [https://programmers.co.kr/learn/challenges](https://programmers.co.kr/learn/challenges)

### 문제 설명

한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

### 제한사항

-   numbers는 길이 1 이상 7 이하인 문자열입니다.
-   numbers는 0~9까지 숫자만으로 이루어져 있습니다.
-   "013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.

### 입출력 예

| numbers | return |
| ------- | ------ |
| "17"    | 3      |
| "011"   | 2      |

### 나의 풀이

```javascript
function solution(numbers) {
    var answer = 0;
    let numberchar = [];

    for (let i = 0; i < numbers.length; i++) {
        numberchar[i] = numbers.charAt(i);
    }

    numberchar = new Set(getPermutation(numberchar).map(Number));
    numberchar = [...numberchar];

    for (let k = 0; k < numberchar.length; k++) {
        let l = 2;
        for (; l < numberchar[k]; l++) {
            if (numberchar[k] % l === 0) break;
        }
        if (numberchar[k] === l) answer++;
    }

    return answer;
}

const getPermutation = (arr, fixed = "", store = []) => {
    if (arr.length >= 1) {
        for (let i = 0; i < arr.length; i++) {
            const newFixed = fixed + arr[i];
            const copyArr = arr.slice();
            copyArr.splice(i, 1);

            store.push(newFixed);

            getPermutation(copyArr, newFixed, store);
        }
    }
    return store;
};
```
