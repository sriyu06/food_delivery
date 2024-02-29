const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());


const users = [
  { username: 'user1', password: 'password1', id: 1 },
  { username: 'user2', password: 'password2', id: 2 }
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    res.status(200).json({ message: 'Login successful', userId: user.id });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.post('/order', (req, res) => {
  const { userId, items } = req.body;
 
  res.status(200).json({ message: 'Order received', userId, items });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
