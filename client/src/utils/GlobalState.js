import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';
import {Provider} from 'react-redux';
import store from './store';
const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({  ...props }) => {
 

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
