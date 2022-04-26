import {BranchTypes} from '../types/branch-types'

const initialState = [];

export const partnerReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case BranchTypes.FETCH_PARTNERS:
            return payload;
        case BranchTypes.REGISTER_PARTNER:
            return [...state, payload];
        default:
            return state;
    }
}

// export const selectedProduct = (state = {}, {type, payload}) => {
//     switch (type) {
//         case ActionTypes.SELECTED_PRODUCT:
//             return {...state, ...payload};
//         case ActionTypes.REMOVE_SELECTED_PRODUCT:
//             return {};
//         default:
//             return state;
//     }
// }
