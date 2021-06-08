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
