const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter age limit: ', (age) => {
    const users = [
        { name: "Alice", age: 30 },
        { name: "Bob", age: 22 },
        { name: "Charlie", age: 27 },
        { name: "David", age: 19 }
    ];

    const filteredUsers = users.filter(user => user.age > parseInt(age, 10));
    console.log(filteredUsers);
    rl.close();
});``