/**
 * Created by jkret on 08/06/2017.
 */
import axios from 'axios';

export const FETCH_EXPENSES = 'fetch_expenses';

const API_URL = 'http://127.0.0.1:3001/v1';

export function fetchExpenses() {
    const request = axios.get(`${API_URL}/expenses`);

    return {
        type: FETCH_EXPENSES,
        payload: request
    }
}