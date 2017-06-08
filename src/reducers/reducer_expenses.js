/**
 * Created by jkret on 08/06/2017.
 */
import _ from 'lodash';
import { FETCH_EXPENSES, FETCH_EXPENSE, DELETE_EXPENSE } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case DELETE_EXPENSE:
            return _.omit(state, action.payload.id);
        case FETCH_EXPENSE:
            return { ...state, [action.payload.data._id]: action.payload.data };
        case FETCH_EXPENSES:
            return _.mapKeys(action.payload.data, '_id');
        default:
            return state;
    }
}