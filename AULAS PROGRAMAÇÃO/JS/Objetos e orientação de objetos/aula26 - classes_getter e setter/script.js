class Person {

    _age = 10; 
    steps = 0;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    takeAStep() {
        this.steps++; 
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    get age() {
        return this._age
    }

    set age(x) {
        if(typeof x === 'number') {
            this._age = x; 
        }
       
    }
}

  let p1 = new Person('José', 'Lourdes');
  let p2 = new Person('Maria', 'Aparecida'); 
  let p3 = new Person('Ana', 'Carolina'); 

  
 
p1.takeAStep(); 
p1.takeAStep(); 
p1.age = 20;
console.log(`${p1.fullName} tem ${p1.age} anos`);   