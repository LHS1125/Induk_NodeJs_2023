const a = false;
if (a) {
    //import checkNumber from './func.mjs';    // 안되는게 맞음
    const m1 = await import('.func.mjs'); // mjsㅍ 파일에서 최상위 스코프에선 async 없이 await할 수 있음
    console.log(m1)
}
console.log('성공');