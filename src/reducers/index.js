/**
 * Created by jkret on 08/06/2017.
 */
import { combineReducers } from 'redux';
import ExpensesReducer from './reducer_expenses';

const rootReducer = combineReducers({
    expenses: ExpensesReducer
});

export default rootReducer;