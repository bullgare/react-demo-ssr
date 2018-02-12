import { FETCH_ADMINS} from "../actions/types";

export default (state = [], action) => {
    if (action.type === FETCH_ADMINS) {
        return action.payload.data;
    }

    return state;
}