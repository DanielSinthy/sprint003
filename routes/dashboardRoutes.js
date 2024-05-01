const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res) => {
    const user = {
        name: 'John Doe',
        transactions: [
            { id: 1, type: 'Income', amount: 1200 },
            { id: 2, type: 'Expense', amount: 300 }
        ]
    };
    res.render('dashboard', { user: user });
});

module.exports = router;
