// let fruits = ['Maça', 'Uva', 'Melão', 'Banana', 'Pera'];

// fruits.sort();
// fruits.reverse();

// console.log(fruits);

let cars = [
    { brand: 'Fiat', year: 2022 },
    { brand: 'BMW', year: 2018 },
    { brand: 'Ferrari', year: 2020 }
]

cars.sort((a, b) =>  {
    return a.year - b.year;
    // if(a.year > b.year) {
    //     return 1;
    // } else if (a.year < b.year) {
    //     return -1;
    // } else {
    //     return 0;
    // }
 });

console.log(cars);