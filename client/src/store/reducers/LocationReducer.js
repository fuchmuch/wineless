const { GET_LOCATIONS } = require('../types')

const initialState = {
   locations: []
}

const LocationReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_LOCATIONS:
            return { ...state, locations: action.payload }
        default:
            return { ...state }
    }
}

export default LocationReducer