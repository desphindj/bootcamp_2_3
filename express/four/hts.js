
const express = require('express');
const app = express();
app.use(express.json());

let users = [{ id: 1, name: "John Doe" }];

app.post('/users', (req, res) => {
    users.push(req.body);
    res.json(req.body);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/users`));