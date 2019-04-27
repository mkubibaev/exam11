import {FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_ITEMS_SUCCESS} from "../actions/actionTypes";

const initialState = {
    items: [],
    loading: true,
    error: null
};

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {...state, loading: true};

        case FETCH_DATA_FAILURE:
            return {...state, loading: false, error: action.error};

        case FETCH_ITEMS_SUCCESS:
            return {...state, loading: false, items: action.items};

        default:
            return state
    }
};

export default itemsReducer;
