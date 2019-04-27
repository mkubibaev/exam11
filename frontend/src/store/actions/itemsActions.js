import axios from '../../axios-api';
import {FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_ITEM_SUCCESS, FETCH_ITEMS_SUCCESS} from "./actionTypes";

const fetchDataRequest = () => ({type: FETCH_DATA_REQUEST});
const fetchDataFailure = error => ({type: FETCH_DATA_FAILURE, error});

const fetchItemsSuccess = items => ({type: FETCH_ITEMS_SUCCESS, items});
const fetchItemSuccess = item => ({type: FETCH_ITEM_SUCCESS, item});

export const fetchItems = categoryId => {
    return async dispatch => {
        let url = '/items';

        if (categoryId) url += `?category=${categoryId}`;

        dispatch(fetchDataRequest());

        try {
            const response = await axios.get(url);
            dispatch(fetchItemsSuccess(response.data));
        } catch (e) {
            dispatch(fetchDataFailure(e));
        }
    }
};

export const fetchItem = itemId => {
    return async dispatch => {

        dispatch(fetchDataRequest());

        try {
            const response = await axios.get(`/items/${itemId}`);
            dispatch(fetchItemSuccess(response.data));
        } catch (e) {
            dispatch(fetchDataFailure(e));
        }
    }
};


