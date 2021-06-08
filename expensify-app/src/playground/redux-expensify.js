import { createStore, combineReducers } from 'redux';

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
 * Expenses Reducer
*/
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type) {
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

console.log(store.getState());
