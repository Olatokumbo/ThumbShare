import * as actionTypes from "../actions/actionTypes";
const initialState = {
    authError: null,
    user: []
}

const authReducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.SIGNIN_SUCCESS:
            return{
                ...state,
                authError: null,
                user: action.user
            }
        case actionTypes.SIGNIN_FAILED:
            return{
                ...state,
                authError: action.error
            }
        case actionTypes.SIGNUP_SUCCESS:
            return{
                ...state,
                authError: null,
                user: action.user
            }
        case actionTypes.SIGNUP_FAILED:
            return{
                ...state,
                authError: action.error
            }
        default:
            return state
    }
}

export default authReducer;