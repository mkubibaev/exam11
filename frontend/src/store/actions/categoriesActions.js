import axios from '../../axios-api';
import {FETCH_CATEGORIES_SUCCESS, FETCH_DATA_FAILURE, FETCH_DATA_REQUEST} from "./actionTypes";


const fetchDataRequest = () => ({type: FETCH_DATA_REQUEST});
const fetchDataFailure = error => ({type: FETCH_DATA_FAILURE, error});

const fetchCategoriesSuccess = categories => ({type: FETCH_CATEGORIES_SUCCESS, categories});

export const fetchCategories = () => {
    return async dispatch => {
        dispatch(fetchDataRequest());

        try {
            const response = await axios.get('/categories');
            dispatch(fetchCategoriesSuccess(response.data))
        } catch (e) {
            dispatch(fetchDataFailure(e));
        }
    }
};
