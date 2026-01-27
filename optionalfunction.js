"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function optional(name, age) {
    console.log(name, age);
}
optional("Soham", 25);
optional("Soham");
function defaultParam(name, age) {
    if (age === void 0) { age = 18; }
    console.log(name, age);
}
defaultParam("Soham", 25);
defaultParam("Soham");
