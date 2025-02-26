const fs = require('fs');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const FILE_PATH = './users.json';
const readUsers = () => JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'));

const writeUsers = (data) => fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
app.get('/users', (req, res) => res.json(readUsers()));

app.post('/users', (req, res) => {
    let users = readUsers();
    let newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    writeUsers(users);
    res.status(201).json(newUser);
});
app.put('/users/:id', (req, res) => {
    let users = readUsers();
    let userId = parseInt(req.params.id);
    let userIndex = users.findIndex(u => u.id === userId);
    if (userIndex === -1) return res.status(404).json({ message: 'User not found' });

    users[userIndex] = { ...users[userIndex], ...req.body };
    writeUsers(users);
    res.json(users[userIndex]);
});
app.delete('/users/:id', (req, res) => {
    let users = readUsers();
    let newUsers = users.filter(u => u.id !== parseInt(req.params.id));
    writeUsers(newUsers);
    res.json({ message: 'User deleted' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
