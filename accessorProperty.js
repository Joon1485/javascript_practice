class Student {
    // 접근자 프로퍼티(Accessor Property)
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.lastName} ${this.firstName}`;
    }
    set fullName(value) {
        console.log(value);
    }
}
const student = new Student('주', '정준');
console.log(student.fullName);      // .을 이용해 값을 읽으면 get함수 호출
student.fullName = '쭈쩡쭌';        // =을 통해 할당, set함수 호출
