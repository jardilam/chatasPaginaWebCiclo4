import {
    TYPES
} from '../actions/Shopping'

export const shoppingInitialState = {
    products: [{
            id: 1,
            name: "Lomo Fino de Res",
            description:"Corte bastante suave y sin marmoleado. Este corte se cocina rápidanmente y no se endurece.",
            price: 32000
        },
        {
            id: 2,
            name: "Churrasco",
            description:"Filete proveniente de la falda de la vaca. Ideal en preparaciones como asados o a la parrilla.",
            price: 24000
        },
        {
            id: 3,
            name: "Punta de Anca",
            description:"Corte blando de buen marmóreo y jugoso.",
            price: 24000
        },
        {
            id: 4,
            name: "Centro de Cadera",
            description:"Corte tierno y jugoso. Esta pieza contiene los filetes de más alta categoría. Ideal para hacer a la plancha, freído y asado.",
            price: 18800
        },
        {
            id: 5,
            name: "T-Bone",
            description:"El corte del típico hueso 'T'. Un excelente corte que reúne dos piezas: Lomo fino y el entrecot.",
            price: 32000
        },
        {
            id: 6,
            name: "Lomo de Cerdo",
            description:"Este es un corte magro muy apetecido por su bajo contenido de grasa y su fácil preparación.",
            price: 19500
        },
        {
            id: 7,
            name: "Pezuña",
            description:"Esta pieza es de excelente sabor. Usada en estofados y sopas.",
            price: 32000
        },
        {
            id: 8,
            name: "Costilla de Cerdo",
            description:"Un corte con gran sabor. Ideal para freír u hornear.",
            price: 18000
        },
        {
            id: 9,
            name: "Chuleta de Cerdo",
            description:"Este es un corte que contiene hueso lo que lo hace apetecido por su sabor y textura.",
            price: 32000
        },
        {
            id: 10,
            name: "Panceta de Cerdo",
            description:"Está compuesto por piel y capas de carne. Es un corte de excelente sabor debido a su alto contenido de grasa.",
            price: 18000
        },
        {
            id: 11,
            name: "Alas",
            description:"Las alas del pollo tienen un sabor incomparable. Ideales para ser horneadas, en guisos o freídas.",
            price: 9000
        },
        {
            id: 12,
            name: "Pechuga Entera",
            description:"Esta pieza se carácteriza por ser versatil en la cocina. Su hueso es usado para sopas y guisos, además su carne es ideal para desmechar o guisar.",
            price: 13000
        },
        {
            id: 13,
            name: "Filete de Pechuga",
            description:"Proveniente de la pechuga del pollo. El filete es un corte en donde ya viene sin hueso y abierta. Ideal para rellenar, enrollar o asar a la plancha.",
            price: 15000
        },
        {
            id: 14,
            name: "Pierna Pernil",
            description:"Es la unión de el muslo y la colombina. Tiene un excelente sabor en cualquiera de sus preparaciones.",
            price: 8000
        },
        {
            id: 15,
            name: "Muslo",
            description:"Altamente apetecida, esta pieza tiene buen contenido de carne y muy poca grasa.",
            price: 9000
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