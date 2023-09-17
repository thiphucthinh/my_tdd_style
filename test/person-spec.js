const {expect} = require("chai");
const Person = require("../problems/person.js");

let person1;
let person2;

beforeEach(() => {
    person1 = new Person("Karina", 23);
    person2 = new Person("Winter", 22);
});

describe("Person", function() {
    describe("constructor", function() {
        it("should set name and age as properties of the instance", function() {
            expect(person1.name).to.equal("Karina");
            expect(person1.age).to.equal(23);
            expect(person2.name).to.equal("Winter");
            expect(person2.age).to.equal(22);
        });
    });
});

describe("sayHello()", function() {
    it("should return a string of the Person instance's name and a greeting message", function() {
        expect(person1.sayHello()).to.equal(`Hello, my name is Karina`);
    });
});

describe("visit(otherPerson)", function() {
    it("should return a string stating that this instance visited the passed-in person instance", function () {
        expect(person1.visit(person2)).to.equal(`Karina visited Winter`);
    });
});

describe("switchVisit(otherPerson)", function() {
    it("should invoke the visit function of the parameter (otherPerson), passing in the current instance as the argument", function() {
        expect(person1.switchVisit(person2)).to.equal(`Winter visited Karina`);
    });
});

describe("update(obj)", function() {
    context("When the incoming argument is a valid object", function() {
        it("should update instance properties to match the passed-in object", function () {
            let person3 = new Person("NingNing", 21);
            person2.update(person3);
            expect(person2.name).to.equal("NingNing");
            expect(person2.age).to.equal(21);
        });
    });

    context("When the incoming argument is not valid", function() {
        it("should throw a TypeError when the incoming argument is not a valid object", function() {
            const testFunction = () => person1.update("not a valid object");
            expect(testFunction).to.throw(TypeError, "Invalid argument: obj must be an object");
        });

        it("should throw a TypeError if the incoming object does not have a name and age property", function() {
            const testFunction = () => person2.update({ name: "Giselle" });
            expect(testFunction).to.throw(TypeError, "Invalid object: obj must have name and age properties");
        });
    });
});

describe("tryUpdate(obj) will call the update(obj)", function() {
    context("when update(obj) is successfully invoked", function() {
        it("should return true", function() {
            let person3 = new Person("NingNing", 21);
            const successfulUpdate = person1.tryUpdate(person3);
            expect(successfulUpdate).to.be.true;
        });
    });


    context("when update(obj) is failed to invoked", function() {
        it("should return fail", function() {
            const failedUpdate = person2.tryUpdate(23);
            expect(failedUpdate).to.be.false;
        });
    });
});

describe("greetAll(obj) static method", function() {
    it("should intake an array of Person instances, and call the sayHello() method on each Person instance. Then return an array", function() {
        let person3 = new Person("NingNing", 21);
        let arr = [person1, person2, person3];
        expect(Person.greetAll(arr)).to.be.an("array");
        expect(Person.greetAll(arr)).to.have.lengthOf(3);
        expect(Person.greetAll(arr)[0]).to.equal("Hello, my name is Karina");
        expect(Person.greetAll(arr)[1]).to.equal("Hello, my name is Winter");
        expect(Person.greetAll(arr)[2]).to.equal("Hello, my name is NingNing");
    });
});
