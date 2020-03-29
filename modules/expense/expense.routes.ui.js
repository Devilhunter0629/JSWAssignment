const router = require('express').Router();
const ExpenseController = require('./expense.controller');

router.get('/', async (req, res, next) => {
    let expenselist = await ExpenseController.list();
    console.log(expenselist);
    res.render('expense/index', {
        title : 'Expense tracker',
        expenselist
    });
});

router.get('/', async (req, res, next) => {
    let saving = await ExpenseController.add();
    console.log(expenselist);
    res.render('expense/index', {
        saving
    });
});

module.exports = router;