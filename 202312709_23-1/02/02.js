const answer = `콜백지옥이라고 불리는 지저분한 자바 스크립트 코드의 해결책으로 프로미스가 있다.
`;
console.log(answer);

function findAndSaveUser(Users){
    const promise = new Promise((resolve, rejct) => {
        if (Users == 'LHS'){
            resolve('찾기 성공');
        }else {
            reject('찾기 실패');
        }
    });

    promise
    .then((user) => {
       console.log( user + ' 유저찾기 성공')       
    })    
    .catch(err => {
        console.error(err);
    });
}

findAndSaveUser('LHS');