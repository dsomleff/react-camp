import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

/**
 * Export this to make unconnected component
 * for testing purposes
 */
export const ExpenseList = (props) => (
  <div>
  {
    props.expenses.length === 0 ? (
      <p>No expenses</p>
    ) : (
      props.expenses.map((expense) => (
        <ExpenseListItem key={expense.id} {...expense}/>
      ))
    )
  }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

/**
 * Using inside actual app
 */
export default connect(mapStateToProps)(ExpenseList);
