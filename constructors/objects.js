function User(name, designation) {
    this.name = name;
    this.designation = designation;
    this.online = false;

    this.login = function () {
        console.log(this.name + " has logged in");
        this.online = true;
    }
}

var firstUser = new User('pravesh', 'developer');
var secondUser = new User('parash', 'doctor');

console.log(firstUser);
secondUser.login();