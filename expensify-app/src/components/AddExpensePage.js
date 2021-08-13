import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
   onSubmit = (expense) => {
    // props.dispatch(addExpense(expense)); // with it testing is complicated
    this.props.onSubmit(expense); // simplify testing
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>Create Expense</h1>
        <ExpenseForm
          onSubmit={ this.onSubmit }
        />
      </div>
    );
  }
}

// simplify testing
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
