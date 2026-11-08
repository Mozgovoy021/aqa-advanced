const person = {
    firstName: 'Anna',
    lastName: 'Kovalenko',
    age: 28,
};

person.email = 'anna.kovalenko@example.com';

delete person.age;

console.log(person);
