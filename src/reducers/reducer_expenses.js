/**
 * Created by jkret on 08/06/2017.
 */
import _ from 'lodash';
import { FETCH_EXPENSES } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_EXPENSES:
            return _.mapKeys(action.payload.data, '_id');
        default:
            return state;
    }
}