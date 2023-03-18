import {Person} from "../lib/Person";

let person1 : Person = new Person("Jan", "93042500973");
console.log(`Person 1 name is ${person1.getName()} and person gender is ${person1.getGender()} and person age is ${person1.getAge()}`);

let person2 : Person = new Person("Anna", "11213000863");
console.log(`Person 2 name is ${person2.getName()} and person gender is ${person2.getGender()} and person age is ${person2.getAge()}`);