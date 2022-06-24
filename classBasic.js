
class Fruit {
    // 생성자 : new 키워드로 객체를 생성할 때 호출되는 함수
    constructor(name, count) {
        this.name = name;
        this.count = count;
    }
    // 함수는 생성자 안에서도 되지만, 가급적 함수 밖에서 정의. function 붙이면 에러.
    display() {
        console.log(`${this.name}: ${this.count}`);
    }
}

// apple은 Fruit이라는 클래스의 인스턴스이다. (Fruit 클래스를 통해 만들어진 객체이기 때문에.)
let apple = new Fruit('apple', 5);
apple.display();

// obj는 그냥 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
let obj = {name: 'Jun'};

// obj.display(); 이 표현법은 잘못됨. 
