let numbers = "17";

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

console.log(solution(numbers));
