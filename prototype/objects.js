function User(name, designation) {
    this.name = name;
    this.designation = designation;
    this.online = false;
}

User.prototype.login = function () {
    this.online = true;
    console.log(this.name + " has logged in");
}

User.prototype.logout = function () {
    this.online = false;
    console.log(this.name + " has logged out");
}

function Admin(...args) {
    User.apply(this, args);
    this.role = "super admin"
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteuser = function () {
    console.log('user deleted');
}

var firstUser = new User('pravesh', 'developer');
var secondUser = new User('parash', 'doctor');

var adminUser = new Admin('ola', 'amigo')
