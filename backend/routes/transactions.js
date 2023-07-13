const {
  addExpense,
  getExpense,
  deleteExpense,
} = require('../controllers/expense');
const {
  addIncome,
  getIncomes,
  deleteIncome,
} = require('../controllers/income');

const router = require('express').Router();

router
  // income
  .post('/add-income', addIncome)
  .get('/get-incomes', getIncomes)
  .delete('/delete-income/:id', deleteIncome)
  // expense
  .post('/add-expense', addExpense)
  .get('/get-expense', getExpense)
  .delete('/delete-expense/:id', deleteExpense);

module.exports = router;
