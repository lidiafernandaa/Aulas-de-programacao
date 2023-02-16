class Person {

    age = 0; 
    steps = 0;

    constructor(name) {
        this.name = name;
    }

    takeAStep() {
        this.steps++; 
    }
}

  let p1 = new Person('José');
  let p2 = new Person('Maria'); 
  let p3 = new Person('Ana'); 

  p1.age = 25;
  p2.age = 41;
  p3.age = 19;

//   console.log(`${p1.name} tem ${p1.age} anos`);  
//   console.log(`${p2.name} tem ${p2.age} anos`); 
//   console.log(`${p3.name} tem ${p3.age} anos`); 

p1.takeAStep(); 
p1.takeAStep(); 
console.log(`Passos de ${p1.name}: ${p1.steps}`); 