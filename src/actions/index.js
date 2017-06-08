/**
 * Created by jkret on 08/06/2017.
 */
import axios from 'axios';

export const FETCH_EXPENSES = 'fetch_expenses';
export const CREATE_EXPENSE = 'create_expense';
export const FETCH_EXPENSE = 'fetch_expense';

const API_URL = 'https://tranquil-escarpment-77670.herokuapp.com/v1';

export function fetchExpenses() {
    const request = axios.get(`${API_URL}/expenses`);

    return {
        type: FETCH_EXPENSES,
        payload: request
    }
}

export function createExpense(values, callback) {
    const request = axios.post(`${API_URL}/expenses`, values)
        .then(() => callback());

    return {
        type: CREATE_EXPENSE,
        payload: request
    }
}

export function fetchExpense(id) {
    const request = axios.get(`${API_URL}/expenses/${id}`);

    return {
        type: FETCH_EXPENSE,
        payload: request
    }
}