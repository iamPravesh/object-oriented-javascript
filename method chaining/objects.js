// method chaining

// class User {
//     constructor(email, name) {
//         this.email = email;
//         this.name = name;
//         this.score = 0;
//     }
//     login() {
//         console.log(this.name, ' just logged in');
//         return this
//     }
//     logout() {
//         console.log(this.name, ' just logged out');
//         return this
//     }
//     updateScore() {
//         this.score++;
//         console.log(this.name, ' score is now ', this.score);
//         return this;
//     }
// }
// var userOne = new User('ryu@ninja.com', 'ryu');

// userOne.updateScore().logout().login();

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

var firstUser = new User('pravesh', 'developer');
firstUser.login().greet().placement();