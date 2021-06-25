/*
 * Actions for Expenses Reducer
*/
import { v4 as uuidv4 } from 'uuid';

// ADD EXPENSE ACTION
export const addExpense = (
  {
    description = '',
    amount = 0,
    createdAt = 0,
    note = ''
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuidv4(),
    description,
    amount,
    createdAt,
    note
  }
});

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
