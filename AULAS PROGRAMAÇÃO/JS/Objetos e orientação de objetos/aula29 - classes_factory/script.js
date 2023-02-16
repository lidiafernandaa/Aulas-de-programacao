class Person {

    age = 0; 

    constructor(name) {
        this.name = name; 
    }
}

function createPerson(name) {
    let p = new Person(name); 
}