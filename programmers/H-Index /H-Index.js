function solution(citations) {
  const sortedCitations = citations.sort((a, b) => b - a);
  let answer = 0;

  for (answer; answer + 1 <= sortedCitations[answer]; answer++) {}

  return answer;
}

console.log(solution([3, 1, 1, 1, 4]));

/*function solution(citations) {
  const sortedCitations = citations.sort((a, b) => b - a);
  let answer = 0;

  for (answer; answer + 1 <= sortedCitations[answer]; answer++) {}

  return answer;
}*/

/*function solution(citations) {
  const sortedCitations = citations.sort((a, b) => b - a);
  return sortedCitations.findIndex((citation, idx) => citation <= idx + 1) + 1;
}*/

/*function solution(citations) {
  const sortedCitations = citations.sort((a, b) => b - a);
  let answer = 0;

  sortedCitations.forEach((citation, idx) => {
    if (citation >= idx + 1) {
      answer = idx + 1;
    }
  });

  return answer;
}*/

/*
function solution(citations) {
  const sortedCitations = citations.sort((a, b) => b - a);
  let answer = 0;

  sortedCitations.map((citation, idx) => {
    if (citation <= idx + 1 && !answer) {
      answer = idx + 1;
    }
  });

  return answer;
}*/
