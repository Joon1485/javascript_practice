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
