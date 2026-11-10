const users = [
  { name: 'John', email: 'john@example.com', age: 25 },
  { name: 'Anna', email: 'anna@example.com', age: 30 },
  { name: 'Ivan', email: 'ivan@example.com', age: 22 },
];

for (const { name, email, age } of users) {
  console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}
