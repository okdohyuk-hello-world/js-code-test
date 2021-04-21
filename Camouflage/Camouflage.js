const clothes = [
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
];

function solution(clothes) {
    let answer = 1;
    let obj = {};

    clothes.forEach((element) => {
        obj[element[1]] = obj[element[1]] ? obj[element[1]] + 1 : 1;
    });

    obj = Object.values(obj).map((x) => x + 1);

    for (let i = 0; i < obj.length; i++) {
        answer = answer * obj[i];
    }

    return answer - 1;
}

console.log(solution(clothes));
