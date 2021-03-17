import { GET_JOKES, GET_JOKES_FAIL, GET_JOKES_SUCCESS } from '../actions';

const initialState = {
    jokes: [],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOKES:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case GET_JOKES_SUCCESS:
            return {
                ...state,
                jokes: action.payload,
                isFetching: false,
                error: ''
            };
        case GET_JOKES_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}