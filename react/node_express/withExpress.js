const express = require('express');
const app = express();
const PORT = 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Hello from Express.js server!');
});

app.post('/postv3', (req, res) => {
  res.send('Hello from POST Express.js server!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
