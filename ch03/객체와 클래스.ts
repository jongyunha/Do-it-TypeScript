// 클래스 선언문
class Person1 {
  name: string;
  age?: number;
}

let jack1: Person1 = new Person1();
jack1.name = "jack";
jack1.age = 32;
console.log(jack1);

// 접근 제한자
// 클래스의 속성은 public, private, protect 와 같은 접근제한자 를 붙일수 있음.
// 생략하면 모두 public 으로 간주

// 생성자 constructor
class Person2 {
  constructor(public name: string, public age?: number) {}
}
let jack2: Person2 = new Person2("jack", 32);
console.log(jack2); // Person2 {name: 'jack', age: 32}

// 타입스크립트는 생성자의 매개변수에 public 과 같은 접근 제한자를 붙이면 해당 매개변수의
// 이름을 가진 속성이 클래스에 선언된 것처럼 동작합니다.
// 즉 Person2 클래스는 다음 Person3 클래스처럼 장황하게 구현된 것을 함축해서 구현한 것입니다.
class Person3 {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// 인터페이스 구현
// 인터페이스는 속성이 있어야 한다는 규약에 불과할 뿐 물리적으로 해당 속성을 만들지 않습니다.
// 클래스 몸통에는 반드시 인터페이스가 정의하고 있는 속성을 멤버 속성으로 만들어야 합니다.

interface IPerson4 {
  name: string;
  age?: number;
}

class Person4 implements IPerson4 {
  constructor(public name: string, public age?: number) {}
}

let jack4: IPerson4 = new Person4("jack", 32);

// 추상클래스

// abstract 키워드를 사용해 추상클래스를 만들수 있음
// 추상클래스는 자신의 속성이나 메서드 앞에 abstract 를 붙여 나를 상속하는 다른 클래스에서 이 속성이나 메서드를 구현하게 합니다.

// Person5 의 name 속성앞에 abstract 가 붙었으므로 new 연산자를 적용해 객체를 만들 수 없습니다.
abstract class Person5 {
  abstract name: string;
  constructor(public age?: number) {}
}

// 클래스의 상속

// extends 키워드를 사용해 상속 클래스를 생성합니다.
class childPerson extends Person5 {
  constructor(public name: string, age?: number) {
    super(age);
  }
}

let mina: childPerson = new childPerson("mina", 27);
console.log(mina); // childPerson { age: 27, name: 'mina' }

// static 속성

// 클래스 A 는 initValue 라는 정적 속성을 가집니다. 클래스의 정적 속성은 '클래스 이름.정적 속성 이름' 형태의 점 표기법으로 사용해 값을
// 얻거나 설정합니다.

class A {
  static initValue = 1;
}

let initVal = A.initValue;
console.log(initVal);
