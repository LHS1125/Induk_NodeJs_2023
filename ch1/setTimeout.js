function run() {
  console.log('5초 후 실행');
}
console.log('시작');
setTimeout(run, 5000); // 비동기, 설정한 interval이 지난후 해당되는 함수를 실행
console.log('끝');
