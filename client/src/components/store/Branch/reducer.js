import {PICK_DOCTOR_BRANCH} from "./actions";

const defaultState = {
    doctorBranch: ''
}

export const pickBranch = (state = defaultState, action) => {
    console.log(state);
    switch (action.type) {
        case PICK_DOCTOR_BRANCH:
            return {
                ...state,
                doctorBranch: action.payload
            };
        default:
            return state;
    }
}