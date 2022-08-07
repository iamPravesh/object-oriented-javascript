class User {
    constructor(name, designation) {
        this.name = name;
        this.designation = designation;
    }

    login() {
        console.log(this.name, ' just logged in');
        return this;
    }
    greet() {
        console.log('Hello, I am ', this.name);
        return this;
    }
    placement() {
        console.log('I am the ', this.designation, ' at the company');
        return this;
    }
}

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {
            return u.name !== user.name;
        })
    }
}

var firstUser = new User('pravesh', 'developer');
var secondUser = new User('parash', 'doctor');
var thirdUser = new User('bikas', 'accountant');

var admin = new Admin('admin', 'admin');

var users = [firstUser, secondUser, thirdUser, admin];

admin.deleteUser(secondUser);
console.log(users);