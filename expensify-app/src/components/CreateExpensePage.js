import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense, AddExpense } from '../actions/expenses';

const CreateExpensePage = (props) => (
  <div>
    <h1>Create Expense</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(CreateExpensePage);
