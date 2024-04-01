import CONSTANTS from "../Constants";
const { ACTIONS } = CONSTANTS;

export function registrationReducer(state, action) {
    switch(action.type) {
        case ACTIONS.INPUT_CHANGE: {
            const { payload: { name, value } } = action;

            return {
                ...state,
                [name]: value 
            };
        }
        default: return state;
    }
}