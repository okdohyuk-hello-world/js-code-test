let answers = [2, 3, 4, 2, 1];

function solution(answers) {
    let answer = [];
    const stu1 = [1, 2, 3, 4, 5];
    const stu2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const stu3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count = [0, 0, 0];

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === stu1[i % 5]) count[0]++;
        if (answers[i] === stu2[i % 8]) count[1]++;
        if (answers[i] === stu3[i % 10]) count[2]++;
    }

    let maxCount = Math.max.apply(null, count);
    console.log(maxCount);
    for (let j = 0; j < count.length; j++) {
        if (count[j] === maxCount) {
            answer.push(j + 1);
        } else {
            continue;
        }
    }

    return answer;
}

console.log(solution(answers));
