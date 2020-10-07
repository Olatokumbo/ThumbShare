import * as actionTypes from "../actions/actionTypes";

const initialState = {
    myPhotos: []
}


const profileReducer = (state = initialState, action) =>{
    switch (action.type) {
        case actionTypes.FETCH_MY_POSTS:
            return{
             myPhotos: action.myPhotos   
            }
        default:
            return state;
    }
}

export default profileReducer