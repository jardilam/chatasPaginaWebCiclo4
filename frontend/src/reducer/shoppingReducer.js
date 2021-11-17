import {
    TYPES
} from '../actions/Shopping'

export const shoppingInitialState = {
    products: [{
            id: 1,
            name: "Lomo Fino de Res",
            price: 32000
        },
        {
            id: 2,
            name: "Churrasco",
            price: 24000
        },
        {
            id: 3,
            name: "Punta de Anca",
            price: 24000
        },
        {
            id: 4,
            name: "Centro de Cadera",
            price: 18800
        },
        {
            id: 5,
            name: "T-Bone",
            price: 32000
        },
    ],
    cart: []
};

export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.addToCart: {
            let newItem = state.products.find(product => product.id === action.payload);
            let itemInCart = state.cart.find(item => item.id === newItem.id)
            return itemInCart ? {
                ...state,
                cart: state.cart.map(item => item.id === newItem.id ? {
                    ...item,
                    quantity: item.quantity + 1
                } : item)
            } : {
                ...state,
                cart: [...state.cart, {
                    ...newItem,
                    quantity: 1
                }]
            };
        }
        case TYPES.removeOne: {
            let itemToDelete = state.cart.find(item => item.id === action.payload);
            return itemToDelete.quantity > 1 ? {
                ...state,
                cart: state.cart.map(item => item.id === action.payload ? {
                    ...item,
                    quantity: item.quantity - 1
                } : item)
            } : {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            };
        }
        case TYPES.removeAll: {
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload)
            };
        }
        case TYPES.clearCart:
            return shoppingInitialState;
        default:
            return state;
    }
}