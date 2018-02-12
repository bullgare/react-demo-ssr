import { FETCH_CURRENT_USER } from "../actions/types";

export default (state = null, action = {}) => {
    if (action.type === FETCH_CURRENT_USER) {
        return action.payload.data || false;
    }

    return state;
}