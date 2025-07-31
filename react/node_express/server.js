const express = require('express');
const jwt = require('jsonwebtoken');
const { authenticateUser, authorizeRoles, SECRET_KEY } = require('./appMiddleware');

const app = express();
app.use(express.json());

const users = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  { username: 'user', password: 'user123', role: 'user' },
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ name: user.username, role: user.role }, SECRET_KEY, { expiresIn: '2m' });

  res.json({ token });
});

app.get('/public', (req, res) => {
  res.send('This is a public route.');
});

app.get('/dashboard', authenticateUser, (req, res) => {
  res.send(`Hello ${req.user.name}, welcome to your dashboard.`);
});

app.get('/admin', authenticateUser, authorizeRoles('admin'), (req, res) => {
  res.send('Welcome to the admin panel.');
});

app.listen(3000, () => console.log('Server running on port 3000'));
