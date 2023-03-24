const crypto = require('crypto');

crypto.randomBytes(64, (err, buf) => {
  const salt = buf.toString('base64');
  console.log('salt:', salt);
  crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {
    console.log('password:', key.toString('base64'));
  });
});
// 매번 같은걸 출력하면 유추가 가능해지니 랜덤 byte인 salt를 사용
// 복호화가 되면 유추가 가능하고 해킹의 위험성이 있기 때문에 양방향 암호화를 잘 사용 안함