/**
 * Created by jkret on 08/06/2017.
 */
import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import ExpensesReducer from './reducer_expenses';

const rootReducer = combineReducers({
    expenses: ExpensesReducer,
    form: formReducer
});

export default rootReducer;