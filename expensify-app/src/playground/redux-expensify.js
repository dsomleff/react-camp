import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

const demoState = {
  expenses: [{
    id: 'qwedeqwdqw',
    description: 'June Rent',
    note: 'We completely forgot to pay our bill.',
    amount: 60000,
    createdAt: 0
  }],

  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

/*
 * Actions
*/
// ADD EXPENSE
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

/*
 * Expenses Reducer
*/
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter((expenses) => expenses.id !== action.id);
    default:
      return state;
  }
};

/*
 * Filter Reducer
*/
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

/*
 * Store creation
*/
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));
