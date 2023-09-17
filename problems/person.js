class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello, my name is ${this.name}`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`;
  }

  switchVisit(otherPerson) {
    return `${otherPerson.name} visited ${this.name}`;
  }

  update(obj) {
    if (typeof obj !== "object") {
      throw new TypeError("Invalid argument: obj must be an object");
    }
    if (!obj.name || !obj.age) {
      throw new TypeError("Invalid object: obj must have name and age properties");
    }

    this.name = obj.name;
    this.age = obj.age;
  }

  tryUpdate(obj) {
    try {
      this.update(obj);
      return true;
    } catch (error) {
      return false;
    }
  }

  static greetAll(obj) {
    return obj.map(person => person.sayHello());
  }

}

module.exports = Person;
