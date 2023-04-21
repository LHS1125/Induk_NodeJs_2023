const answer = `노드에서는 CommonJS 모듈과 ECMAScript모듈을 사용합니다. CommonJs모듈은 표준 자바스크립트 모듈은 아니지만 노드 생태계에서 가장 널리 쓰이는 모듈입니다.
노드에서 아직까지는 CommonJS모듈을 많이 쓰고 있긴 하지만 ECMAScript모듈이 공식적인 자바스크립트 모듈입니다.
CommonJS는 require 함수 안에 불러올 모듈의 경로를 적습니다. 다른 폴더에 있는 파일도 모듈로 사용할 수 있습니다.
ES모듈은 CommonJS모듈과 다르게 import시 파일 경로에서 js, mjs같은 확장자는 생략할 수 없습니다.
ComonJS모듈의 예시는 index.js를, ES모듈의 예시는 index.mjs를 실행하면 출력됩니다.
`;
console.log(answer);