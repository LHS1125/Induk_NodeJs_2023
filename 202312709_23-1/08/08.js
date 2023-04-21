const express = require('express');
const path = require('path');

const app = express();
app.set('port', 8080);

app.get('/', (req, res, next) => {
  console.log('Get 요청에서만 실행됩니다.')
  // res.send('Hello, Express');
  // res.sendFile(path.join(__dirname, '/index.html'));
}, (req, res) =>{
  console.log('Error : 에러는 에러 처리 미들웨어로 갑니다.');
});

app.get('/login', (req, res, next) => {
  console.log('Get Login 요청에서만 실행됩니다.')
  // res.send('Hello, Express');
}, (req, res) =>{
  console.log('Error : 에러는 에러 처리 미들웨어로 갑니다.');
});

app.get('/user', (req, res, next) => {
  console.log('Get User 요청에서만 실행됩니다.')
  // res.send('Hello, Express');  
}, (req, res) =>{
  console.log('Error : 에러는 에러 처리 미들웨어로 갑니다.');
});


app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});