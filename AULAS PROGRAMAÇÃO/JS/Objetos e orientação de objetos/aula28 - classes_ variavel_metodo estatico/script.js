class Person {

    static hands = 2;
    age = 0;

    constructor(name) {
        this.name = name;
    }

    static sayHi() {
        console.log('Oi');
    }
}  

// let p1 = new Person("Lola"); 
// Person.hands = 3;

// console.log(`${p1.name} tem ${Person.hands} mãos`); 

Person.sayHi();