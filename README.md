This folder contains the concept of OOP in JavaScript
We can learn about Classes, Inheritance, and Encapsulation and other OOP concepts

JavaScript Class:
Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes.

Inheritence:
Use of keyword 'extends'
eg: class Admin extends User{}

Constructor:
function that constructs the object.
use of 'this' keyword

When we create new instance of class we are setting the value for the 'this' keyword in that class

Method Chaining:
To impement method chaining we must return a non-undefined value from a method.
Syntax for method chaining is name of the object followed by the methods that need to be chained seperated by dot(.) keyword
eg: newUser.login().greet().placement();

constructor:
Constructor is a function used to create a object.
This can be written as a simple function and the use of 'this' keyword to define the keys of the object.
'this' keyword can also be used to define methods.

<!-- but the better way of defining methods is using prototype -->

Prototype:
Prototype is the base for uses of class in JS.
object properties are defined by using constructor.
object methods are defined by using prototype, written as:
constructor_name.prototype.method_name = function(){}

Prototype inheritance:
'apply' keyword is used to inherit properties of the constructor.
exapmple: function Admin(...args){
User.apply(this,args)
}

A new object is created with super class methods for method inheritence.
example: Admin.prototype = Object.create(User.prototype)
