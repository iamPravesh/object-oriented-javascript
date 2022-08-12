// main concept of Encapsulation: method and properties of the object are encapsulated within the object.
// the best function are those with no parameters.
// complexities are hidden

let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function () {
        return this.baseSalary + (this.overtime * this.rate);
    }
};

console.log(employee.getWage());