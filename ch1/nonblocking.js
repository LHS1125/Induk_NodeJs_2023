// setTimeout을 이용한 논블로킹 I/O 표현(순서 주석표시)

function longRunningTask(nStep){
  // 오래 걸리는 작업
  console.log(nStep, '번째 작업 끝');
}
console.log('시작');
setTimeout(longRunningTask, 0, 1);
console.log('다음 작업'); 
setTimeout(longRunningTask, 0, 2);

//-------- 결과 -------
// 시작
// 다음 작업
// 1 번째 작업 끝
// 2 번째 작업 끝