"use strict";
var Role;
(function (Role) {
    Role[Role["Leader"] = 0] = "Leader";
    Role[Role["Developer"] = 1] = "Developer";
    Role[Role["Designer"] = 2] = "Designer";
    Role[Role["Tester"] = 3] = "Tester";
    Role[Role["Researcher"] = 4] = "Researcher";
})(Role || (Role = {}));
const member1 = {
    name: "Matthew Sabino",
    age: 20,
    role: Role.Leader,
    active: true,
    print() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Role: ${Role[this.role]}`);
        console.log(`Active: ${this.active}`);
    }
};
const member2 = {
    name: "Jereign Lim",
    age: 21,
    role: Role.Developer,
    active: true,
    print() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Role: ${Role[this.role]}`);
        console.log(`Active: ${this.active}`);
    }
};
member1.print();
member2.print();
