class Account {

    // Public fields (This will not be in prototype but with the instances)
    // _movements = [];

    // Private fields
    #movements = [];

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;

        // Adding underscore will say that this property is protected
        this._pin = pin;
        // this._movements = [];
    }

    // Public methods
    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
        return this;
    }

    withdraw(val) {
        this.#movements.push(-val);
        return this;
    }

    requestLoan(val) {
        if (this.#approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan is approved for Rs.${val}`);
        }
        return this;
    }

    // Private methods
    #approveLoan(val) {
        return true;
    }

}

ram = new Account('Ram', 'Rupees', '1111');
ram.requestLoan(1000)
console.log(ram.getMovements());
// console.log(ram.#movements); Throws error

// Chaining
ram.deposit(100).deposit(200).withdraw(100).requestLoan(2000);
console.log(ram.getMovements());