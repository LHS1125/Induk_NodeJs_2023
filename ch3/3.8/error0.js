setInterval(() => {
  console.log('시작');
  throw new Error('서버를 고장내주마!'); // 강제로 에러 발생
}, 1000); // try~catch로 예외처리를 하지 않아서 죽는 것 같음
