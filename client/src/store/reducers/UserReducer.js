const { IS_LOGGEDIN, GET_USER, NEW_USER, DELETE_USER, UPDATE_USER } = require('../types')

const initialState = { 
    isLoggedin: false,
    user: {},
    newUser: {

    }
}

const UserReducer = (state = initialState, action) => {
    switch(action.type) {
        case IS_LOGGEDIN:
            return { ...state, isLoggedin: action.payload }
        case NEW_USER:
            return { ...state, newUser: {...state.newUser, ...action.payload}}
        case GET_USER:
            return { ...state, user: action.payload }
        case UPDATE_USER:
            return { ...state, user: {...state.user, ...action.payload}}
        case DELETE_USER:
            return { ...state, user: action.payload }
        default:
            return { ...state }
    }
}

export default UserReducer

