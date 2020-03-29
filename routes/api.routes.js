const router = require("express").Router();

const expenseRouter = require('../modules/expense/expense.routes.api');

router.use("/expense", expenseRouter);

module.exports = router;