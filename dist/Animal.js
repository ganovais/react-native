"use strict";
var Animal = /** @class */ (function () {
    function Animal() {
    }
    // constructor() {}
    Animal.prototype.comer = function () {
        console.log('Animal está comendo');
    };
    return Animal;
}());
var animal = new Animal();
animal.comer();
