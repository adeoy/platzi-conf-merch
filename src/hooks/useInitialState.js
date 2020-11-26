import { useState, useEffect } from 'react';
import axios from 'axios';

import initialState from '../initialState';

const API = 'https://us-central1-gndx-fake-api.cloudfunctions.net/api';

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [products, setProducts] = useState([]);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  }

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id),
    })
  }

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  }

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  }

  useEffect(async () => {
    const resp = await axios(`${API}/products`);
    setProducts(resp.data);
  }, []);

  return {
    state,
    products,
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
  };
};

export default useInitialState;