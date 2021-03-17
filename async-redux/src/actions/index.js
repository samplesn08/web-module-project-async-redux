import axios from 'axios';

export const GET_JOKES = "GET_JOKES";
export const GET_JOKES_SUCCESS = "GET_JOKES_SUCCESS";
export const GET_JOKES_FAIL = "GET_JOKES_FAIL";
export const PUNCHLINE_HIDE = "PUNCHLINE_HIDE";
export const PUNCHLINE_SHOW = "PUNCHLINE_SHOW";

export const getJokes = () => dispatch => {
    dispatch({ type: GET_JOKES });
    axios.get('https://official-joke-api.appspot.com/random_ten')
        .then(res => {
            dispatch({ type: GET_JOKES_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_JOKES_FAIL, payload: err })
        })
};
