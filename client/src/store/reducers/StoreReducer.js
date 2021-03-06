const { GET_STORES, GET_STORE_BY_ID, IS_LOADING } = require('../types')

const initialState = {
    stores: [],
    store: [],
    isLoading: true
}

const StoreReducer = (state = initialState, action) => {
    switch(action.type) { 
        case IS_LOADING:
            return { ...state, isLoading: action.payload}
        case GET_STORES:
            return { ...state, stores: action.payload }
        case GET_STORE_BY_ID:
            return { ...state, sotre: action.payload }
        default: 
            return { ...state }
    }
}

export default  StoreReducer

