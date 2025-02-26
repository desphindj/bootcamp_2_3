const express = require('express');
const app = express();
const port = 3000;
const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" }
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: "User not found" });
    }
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/users`);
});