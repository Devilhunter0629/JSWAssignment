const router = require('express').Router();
const ExpenseController = require('./expense.controller');

router.post('/', (req, res, next) => {
    ExpenseController.create(req.body)
        .then(d=> {
            res.redirect('/');
            res.json(d);
        })
        .catch(e=>next(e));
});

router.get('/', (req, res,next) => {
    ExpenseController.list()
        .then(d=> res.json(d))
        .catch(e=> next(e));
});

router.get('/:id', (req, res, next) => {
    ExpenseController.getbyID(res.params.id)
        .then(d=> res.json(d))
        .catch(e=> next(e));
});

module.exports = router;

