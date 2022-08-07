// blueprint to describe object
// object is the instance of the blueprint i.e. class

class User {
    // constructor function
    // - is called when a new object is created
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }

    // method for the class are defined ouside the constructor function
    login() {
        console.log(this.name, ' just logged in');
    }

    logout() {
        console.log(this.name, ' just logged out');
    }

}

// the new keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method
var userOne = new User('ryu@ninja.com', 'ryu');
userOne.login();
userOne.logout();