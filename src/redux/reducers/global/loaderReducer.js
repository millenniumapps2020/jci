import * as actionTypes from '../../actions/global/actionTypes';

const INITIAL_STATE = {
    error: null,
    isLoading: false,
    projectId: "1"
};

const loaderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOADER_UPDATE:
            return {
                ...state,
                isLoading: action.payload
            };
        default:
            return state;
    }
};

export default loaderReducer;
