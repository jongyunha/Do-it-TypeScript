// 객체의 타입을 정의 하는 interface
interface Person {
  name: string;
  age: number;
}

let good: Person = { name: "Jack", age: 32 };

// age 속성이 없으므로 오류
// let bad1: Person = { name: "jack" };
// name 속성이 없으므로 오류
// let bad2: Person = { age: 25 };
// etc 속성이 있어서 오류
// let bad3: Person = { etc: true };

// 선택 속성 구문
interface Person2 {
  name: string; // 필수 속성
  age: number; // 필수 속성
  etc?: boolean; // 선택 속성
}
let good1: Person2 = { name: "jack", age: 32 };
let good2: Person2 = { name: "jack", age: 25, etc: true };

// 익명 인터페이스
let ai: {
  name: string;
  age: number;
  etc?: boolean;
} = { name: "Jack", age: 32 };

// 함수에 사용된 익명 인터페이스 예
function printMe(me: { name: string; age: number; etc?: boolean }) {
  console.log(
    me.etc ? `${me.name} ${me.age} ${me.etc}` : `${me.name} ${me.age}`
  );
}

printMe(ai); // Jack 32
