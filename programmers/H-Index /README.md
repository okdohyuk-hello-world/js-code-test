# H-Index

출처: [https://programmers.co.kr/learn/courses/30/lessons/42747](https://programmers.co.kr/learn/courses/30/lessons/42747)

### 문제 설명
H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과1에 따르면, H-Index는 다음과 같이 구합니다.

어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.

어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.

### 나의 풀이
```javascript
function solution(citations) {
    const sortedCitations = citations.sort((a, b) => b - a);
    let answer = 0;

    for (answer; answer + 1 <= sortedCitations[answer]; answer++) {}

    return answer;
}
```

### 기록
문제에 대한 내용을 이해하지 못하여 오래 걸렸다.

처음 H-Index를 이해하지 못하여 참고자료를 찾아보았다.

인용된 논문 수를 내림차 순해서 인용된 숫자에 비해 index 값이 같거나 커지면 그곳을 H-Index로 착각했다.

그리고 [0, 0, 0]의 경우를 배제하고 생각했다.

사실은 인용된 숫자와 index 값이 같으면 H-Index거나, 인용된 숫자가 index 값보다 작으면 이전 index 값이 H-Index였다. 
