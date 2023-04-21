var http = require("http");
const fs = require('fs').promises;

http.createServer(async (request, response) => {
  try {
    const data = await fs.readFile('./04.html');
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(data);
  } catch (err) {
    console.error(err);
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end(err.message);    
  }
})
  .listen(3000, () => {
    console.log('3000번 포트에서 서버 대기 중입니다!');
  });


const answer = `포트 3000번을 가진 http서버를 열며 해당 포트로 접근시 Hello World를 출력해준다.
`;
console.log(answer);