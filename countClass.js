class Counter {
    #value;
    constructor(num) {
        if(this.num < 0 || isNaN(num))
        this.#value = 0;
        else
            this.#value = num
    }
    increment() {
        return this.#value++;
    }
    get value() {
        return this.#value;
    }
}
const count = new Counter(6);
count.increment();
console.log(count.value);
count.increment();
console.log(count.value);
