import {TYPES} from '../actions/Shopping'

export const shoppingInitialState = {
    products: [
        {id: 1, name: "Lomo Fino de Res", price: 32000},
        {id: 2, name: "Churrasco", price: 24000},
        {id: 3, name: "Punta de Anca", price: 24000},
        {id: 4, name: "Centro de Cadera", price: 18800},
        {id: 5, name: "T-Bone", price: 32000},
    ],
    cart: []
};

export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.addToCart: {
            let newItem = state.products.find(product => product.id === action.payload);
            return {
                ...state,
                cart: [...state.cart, newItem]
            }
        }
        case TYPES.removeOne: {

        }
        case TYPES.removeAll: {

        }
        case TYPES.clearCart: {

        }
        default:
            return state;
    }
}