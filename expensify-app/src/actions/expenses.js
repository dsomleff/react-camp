/*
 * Actions for Expenses Reducer
*/
import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase';

// ADD EXPENSE ACTION
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      amount = 0,
      createdAt = 0,
      note = ''
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id:  ref.key,
        ...expense
      }));
    });
  };
};

// REMOVE EXPENSE ACTION
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT EXPENSE ACTION
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
