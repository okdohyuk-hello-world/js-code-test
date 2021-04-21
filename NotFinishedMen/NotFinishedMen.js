let participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
let completion = ["josipa", "filipa", "marina", "nikola"];

function solution(participant, completion) {
    let answer = "";
    participant = participant.sort();
    completion = completion.sort();

    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            answer = participant[i];
            return answer;
        }
    }
}

console.log(solution(participant, completion));
