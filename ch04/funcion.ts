// 함수
function add(a: number, b: number): number {
  return a + b;
}
let result = add(1, 2);
// > 매개변수와 인수, 인자
// a 와 b 는 매개변수이고 add 함수를 호출할 때 전달되는 1 과 2는 인수

// void type
// 값을 반환하지 않는 함수
function printMe(name: string, age: number): void {
  console.log(`name: ${name}, age: ${age}`);
}
printMe("하종윤", 27);

// 함수 시그니처(function signature)
// 변수에 타입이 잇듯이 함수 또한 타입이 있는데 함수의 타입을 함수 시그니처라고 합니다.

const printMe2: (string, number) => void = function (
  name: string,
  age: number
): void {};

// type 키워드로 타입 별칭 만들기
// type 키워는 기존에 존재하는 타입을 단순히 이름만 바꿔서 사용할 수 있게 해줍니다.
// type 새로운타입 = 기존타입

type stringNumberFunc = (string, number) => void;
const f: stringNumberFunc = function (a: string, b: number): void {};

// 함수의 타입, 즉 함수 시그니처를 명시하면 다음화면에서 보는것 처럼 매개변수의 개수나 타입, 반환 타입이
// 다른 함수를 선언하는 잘못을 미연에 방지할 수 있습니다.

// undefined 관련 주의 사항
// undefined 타입은 타입스크립트의 타입 계층도에서 모든 타입중 최하위 타입입니다.
// undefined 타입을 고려하지 않은 예

interface Nameable {
  name: string;
}
function getName(o: Nameable) {
  return o.name;
}

let n = getName(undefined);
console.log(n);

// getName 은 Nameable 타입의 매개변수를 요구하지만 undefined 를 매개변수로 호출해도 구문 오류가 발생하지 않습니다.
// undefined 는 최하위 타입이므로 Nameable 을 상속하는 자식 타입으로 간주합니다.
// 하지만 코드를 실행하면 undefined.name 이 되어 오류가 발생합니다.
// 매개변수 값이 undefined 인지 판별하는 코드를 작성해야 합니다.

interface Ageable {
  age?: number;
}

function getAge(o: Ageable) {
  return o != undefined && o.age ? o.age : 0;
}

console.log(getAge(undefined));
console.log(getAge(null));
console.log(getAge({ age: 27 }));

// 선택적 매개변수
function fn(arg1: string, arg?: number): void {
  console.log(`arg: ${arg}`);
}

fn("hello", 1);
fn("hello");

// 함수 시그니처 타입의 선택적 매개변수
type OptionalArgFunc = (string, number?) => void;
