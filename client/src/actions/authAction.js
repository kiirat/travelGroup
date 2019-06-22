import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER } from './types'


export const registerUser = (userData, history) => dispatch => {
    axios
        .post('/api/users/register', userData)
        .then(res => history.push('/login'))
        .catch(error => {
            dispatch({
                type: GET_ERRORS,
                payload: error.response.data
            })
        })
    
}
// Login getb user Token
export const loginUser = userData => dispatch => {
    axios
        .post('/api/users/login', userData)
        .then(res => {
            // save to local storage
            const { token } = res.data
            // set token to ls
            localStorage.setItem('jwtToken', token)
            // set token to auth headr
            setAuthToken(token)
            // decode token to get user data
            const decoded = jwt_decode(token)
            dispatch(setCurrentUser(decoded))
        })
        .catch(error => 
            dispatch({
                type: GET_ERRORS,
                payload: error.response.data
            })    
        )
}
// set logged user

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser = () => dispatch => {
    // Remove token from localStorage
    localStorage.removeItem('jwtToken')
    // delete header auth from all request
    setAuthToken(false)

    dispatch(setCurrentUser({}))
}