import { FETCH_USERS } from '../actions/types';

export default (state = [], action) => {
    if (action.type === FETCH_USERS) {
        return action.payload.data;
    }

    return state;
}