import axios from 'axios';
import { FETCH_USERS, API_URL } from './types';

export const fetchUsers = () => async dispatch => {
    const res = await axios.get(`${API_URL}/users`);

    dispatch({
        type: FETCH_USERS,
        payload: res
    });
};