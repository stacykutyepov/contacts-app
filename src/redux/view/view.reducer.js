import ViewTypes from './view.types';

const INITIAL_STATE = {
    view: 'tiled'
}

const viewReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ViewTypes.SWITCH_VIEW:
            return {
                ...state, view: action.payload
            }
        default:
            return state;
    }
}

export default viewReducer;