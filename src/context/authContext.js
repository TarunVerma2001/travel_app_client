import React, { useReducer } from 'react';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import { getme, login, signup } from '../util/api';

const initialState = {
  name: '',
  email: '',
  photo: '',
  isLoggedIn: false,
  loading: false,
};

const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        photo: action.payload.photo,

        isLoggedIn: true,
        loading: false,
      };
    }
    case 'SIGNUP': {
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        photo: action.payload.photo,

        isLoggedIn: true,
        loading: false,
      };
    }

    case 'GET_ME': {
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        photo: action.payload.photo,

        isLoggedIn: true,
        loading: false,
      };
    }
    case 'LOGOUT': {
      return {
        initialState,
      };
    }

    case 'TOGGLE_LOADING': {
      return { ...state, loading: true };
    }
  }
};

export const Context = React.createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onLoadLogin = (data) => {
    const { token } = data;
    // const {role} = data.user;
    Cookies.set('token', token, { path: '/', expires: 90 });
    toast.success('Succesfully logged in!');
    dispatch({ type: 'LOGIN', payload: data.data.user });
  };
  const onLoadSignup = (data) => {
    const { token } = data;
    // const {role} = data.user;
    Cookies.set('token', token, { path: '/', expires: 90 });
    toast.success('Succesfully Signed up!');
    dispatch({ type: 'SIGNUP', payload: data.data.user });
  };
  const onLoadGetMe = (data) => {
    console.log(data.data.user);
    dispatch({ type: 'GET_ME', payload: data.data.user });
  };

  const logout = () => {
    Cookies.remove('token');
    toast.success('logged out!');
    dispatch({ type: 'LOGOUT' });
  };

  const logIn = async (data) => {
    //fetching user
    dispatch({ type: 'TOGGLE_LOADING' });
    login(data, onLoadLogin);
  };

  const signUp = async (data) => {
    //fetching user
    dispatch({ type: 'TOGGLE_LOADING' });
    signup(data, onLoadSignup);
  };

  const getMe = async () => {
    dispatch({ type: 'TOGGLE_LOADING' });
    getme(onLoadGetMe);
  };

  return (
    <Context.Provider value={{ ...state, logIn, signUp, getMe, logout }}>
      {children}
    </Context.Provider>
  );
};
