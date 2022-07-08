// # 문제33 : 거꾸로 출력하기

// 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

// ```jsx
// **입출력**
// 입력 : 1 2 3 4 5
// 출력 : 5 4 3 2 1

// **출력**
// 입력 : 2 4 6 7 8
// 출력 : 8 7 6 4 2
// ```

// 풀이 1
const num = prompt("숫자를 입력해주세요").split(" ").reverse().join(" ");
console.log(num);

// 풀이 2
const nums = prompt().split(" ").reverse();
let numsVal = "";
for (i = 0; i < nums.length; i++) {
  numsVal += `${nums[i]} `;
}
console.log(numsVal);
