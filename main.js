const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

app.use(authRoutes);


app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to the Personal Budget Tracker App!</h1>
    <form action="/login" method="post">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required><br><br>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required><br><br>
      <button type="submit">Login</button>
    </form>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
