import {FETCH_CATEGORIES_SUCCESS, FETCH_DATA_FAILURE, FETCH_DATA_REQUEST} from "../actions/actionTypes";

const initialState = {
    categories: [],
    loading: true,
    error: null
};

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {...state, loading: true};

        case FETCH_DATA_FAILURE:
            return {...state, loading: false, error: action.error};

        case FETCH_CATEGORIES_SUCCESS:
            return {...state, loading: false, categories: action.categories};

        default:
            return state
    }
};

export default categoriesReducer;
