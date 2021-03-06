const initialState = {
    locations: [],

};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_LOCATIONS_SUCCESS':
            return {
                ...state,
                locations: action.payload
            }
        case 'CREATE_LOCATIONS_SUCCESS':
            return {
                ...state,
                locations: [...state.locations, action.payload]
            }

        default:
            return state;
    }
}

