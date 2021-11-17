import {
  useReducer
} from 'react'
import {
  TYPES
} from '../actions/Shopping';
import {
  shoppingReducer,
  shoppingInitialState
} from '../reducer/shoppingReducer'
import CartItem from './CartItem';
import Productcards from "./Productcards";

const ShoppingCart = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

    const {
      products,
      cart
    } = state;

    const addToCart = (id) => {
      console.log(id);
      dispatch({
        type: TYPES.addToCart,
        payload: id
      });
    };

    const delFromCart = (id, all = false) => {
      console.log(id, all)
      if (all) {
        dispatch({
          type: TYPES.removeAll,
          payload: id
        })
      } else {
        dispatch({
          type: TYPES.removeOne,
          payload: id
        })
      }
    };

    const clearCart = () => {
      dispatch({
        type: TYPES.clearCart
      })
    };

    return ( <div>
        <h2> Carrito de Compras </h2> 
        <h3> Productos </h3> 
        <article className = "box grid-responsive"> {
          products.map((product) => ( <Productcards key = {
                product.id
              }
              data = {
                product
              }
              addToCart = {
                addToCart
              }
              />))} 
          </article> 
          <h3> Carrito </h3> 
          <article className = "box">
              <button onClick = {
                clearCart
              }> Limpiar carrito </button> {
                cart.map((item, index) => ( < CartItem key = {
                      item.id
                    }
                    data = {
                      item
                    }
                    delFromCart = {
                      delFromCart
                    }
                    />))
                  } 
                  </article> 
                  </div>
                );
              };


              export default ShoppingCart;