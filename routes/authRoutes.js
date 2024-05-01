const express = require('express');
const router = express.Router();


const users = {
  'admin': '123'
};


router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (users[username] && users[username] === password) {
    res.redirect('/dashboard');
  } else {
    res.status(401).send("Authentication failed");
  }
});

module.exports = router;
