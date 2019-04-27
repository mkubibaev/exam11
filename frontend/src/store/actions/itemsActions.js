import axios from '../../axios-api';
import {FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_ITEMS_SUCCESS} from "./actionTypes";

const fetchDataRequest = () => ({type: FETCH_DATA_REQUEST});
const fetchDataFailure = error => ({type: FETCH_DATA_FAILURE, error});

const fetchItemsSuccess = items => ({type: FETCH_ITEMS_SUCCESS, items});

export const fetchItems = () => {
    return async dispatch => {
        dispatch(fetchDataRequest());

        try {
            const response = await axios.get('/items');
            dispatch(fetchItemsSuccess(response.data));
        } catch (e) {
            dispatch(fetchDataFailure(e));
        }
    }
};


