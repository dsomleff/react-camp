import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
    startDateId: uuidv4(),
    endDateId: uuidv4()
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={ this.props.filters.text }
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />

        <select
          value={ this.props.filters.sortBy }
          onChange={(e) => {
            if (e.target.value === 'date') {
              this.props.dispatch(sortByDate())
            } else if (e.target.value === 'amount') {
              this.props.dispatch(sortByAmount())
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>

        <DateRangePicker
          startDate={ this.props.filters.startDate }
          startDateId={ this.state.startDateId }
          endDate={ this.props.filters.endDate }
          endDateId={ this.state.endDateId }
          onDatesChange={ this.onDatesChange }
          focusedInput={ this.state.calendarFocused }
          onFocusChange={ this.onFocusChange }
          showClearDates={ true }
          numberOfMonths={ 1 }
          isOutsideRange={ () => false }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
