const fs = require('fs');

// F_OK : 파일 존재 여부, R_OK : 읽기 권한 여부, W_OK : 쓰기 권한 여부
fs.access('./ch3/3.6/folder', fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK, (err) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.log('폴더 없음');
      fs.mkdir('./ch3/3.6/folder', (err) => {
        if (err) {
          throw err;
        }
        console.log('폴더 만들기 성공');
        fs.open('./ch3/3.6/folder/file.js', 'w', (err, fd) => {
          if (err) {
            throw err;
          }
          console.log('빈 파일 만들기 성공', fd);
          fs.rename('./ch3/3.6/folder/file.js', './folder/newfile.js', (err) => {
            if (err) {
              throw err;
            }
            console.log('이름 바꾸기 성공');
          });
        });
      });
    } else {
      throw err;
    }
  } else {
    console.log('이미 폴더 있음');
  }
});

// [Running] node "/Users/sopeuteuweeokeompyuteo/Desktop/LHS/Induk_NodeJs_2023/ch3/3.6/fsCreate.js"
// 폴더 없음
// 폴더 만들기 성공
// 빈 파일 만들기 성공 21
// 이름 바꾸기 성공

// [Done] exited with code=0 in 0.044 seconds

// [Running] node "/Users/sopeuteuweeokeompyuteo/Desktop/LHS/Induk_NodeJs_2023/ch3/3.6/fsCreate.js"
// 이미 폴더 있음

// [Done] exited with code=0 in 0.042 seconds