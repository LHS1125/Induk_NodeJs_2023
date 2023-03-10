// 블로킹 I/O 표현(순서 주석표시)

function longRunningTask() {
  // 오래 걸리는 작업
  console.log('작업 끝');
}
console.log('시작');
longRunningTask();
console.log('다음 작업');


//------- 결과 ----------
// 시작
// 작업 끝
// 다음 작업