class Employee {
    static PAY_LATE = 10000;
    constructor(name, depName, workingTime) {
        this.name = name;
        this.depName = depName;
        this.workingTime = workingTime;
    }
    payCalc() {
        return this.workingTime * Employee.PAY_LATE;
    }
}

class PartTimeWorker extends Employee {
    static PAY_LATE = 8000;
    constructor(name, depName, workingTime) {
        super(name, depName, workingTime, PartTimeWorker.PAY_LATE) 
    }
    payCalc() {
        return this.workingTime * PartTimeWorker.PAY_LATE;
    }
}

const employee1 = new Employee('Jun', 'IT', '50');
console.log(employee1);
console.log(employee1.payCalc());

const partEmployee1 = new PartTimeWorker('David', 'IT', '30');
console.log(partEmployee1);
console.log(partEmployee1.payCalc());
