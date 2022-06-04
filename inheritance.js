class Animal {
    constructor(color) {
        this.color = color;
    }
    eat() {
        console.log('먹는다 !');
    }
    sleep() {
        console.log('잔다 !');
    }
}

class Tiger extends Animal {}

const tiger = new Tiger('White');
console.log(tiger);
tiger.eat();

class Dog extends Animal {
    constructor(color, ownerName) {
        super(color);
        this.ownerName = ownerName;
    }
    play() {
        console.log('놀자 ~');
    }
}

const dog = new Dog('Yellow', '쭌');
console.log(dog);
