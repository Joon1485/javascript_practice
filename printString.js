// 문자열의 모든 charactor를 하나씩 출력하기
const printThis = "My name is Jun!";

for (let i = 0; i < printThis.length; i++) {
  console.log(printThis[i]);
}

// 사용자들의 ID를 잘라내어 각각의 ID를 배열로 보관하기
const ids = "user1, user2, user3, userr4";
const array = ids.split(", ");
console.log(array);

// 1초에 한번씩 시계(날짜)를 출력하기
setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleString("ko-KR"));
}, 1000);
