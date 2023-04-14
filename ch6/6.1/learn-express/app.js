const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use((req, res, next) => {
  console.log('모든 오청에 다 실행됩니다.');
  next();
});

app.get('/', (req, res, next) => {
  console.log('Get 요청에서만 실행됩니다.')
  // res.send('Hello, Express');
  // res.sendFile(path.join(__dirname, '/index.html'));
}, (req, res) =>{
  console.log('Error : 에러는 에러 처리 미들웨어로 갑니다.');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
