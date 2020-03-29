const router = require("express").Router();

const expenseRouter = require('../modules/expense/expense.routes.ui');

router.use("/", expenseRouter);

module.exports = router;