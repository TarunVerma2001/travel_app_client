import axios from 'axios';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

const api = axios.create({
  baseURL: 'https://travel-app-serverzzz.herokuapp.com/api/v1/',
});
// const api = axios.create({ baseURL: 'http://127.0.0.1:8000/api/v1/' });

export const getConfig = () => {
  console.log('web verification');
  console.log(Cookies.get('token'));
  return {
    headers: {
      authorization: `Bearer ${Cookies.get('token')}`,
    },
  };
};

export const getAllTours = async () => {
  try {
    const res = await api.get('/tours');
    console.log(res);
    return {
      status: 'success',
      ...res.data,
    };
  } catch (err) {
    toast.error('Server is Busy, Please try again later!');
    // console.log(err.message);
    return { status: 'fail' };
  }
};
export const sortAllTours = async (sortType) => {
  try {
    const res = await api.get(`/tours?sort=${sortType}price`);
    return {
      status: 'success',
      ...res.data,
    };
  } catch (err) {
    toast.error('Server is Busy, Please try again later!');
    // console.log(err.message);
    return { status: 'fail' };
  }
};

export const getTour = async (tourId) => {
  try {
    const res = await api.get(`/tours/${tourId}`);
    console.log(res);
    return {
      status: 'success',
      ...res.data,
    };
  } catch (err) {
    toast.error('Server is Busy, Please try again later!');
    // console.log(err.message);
    return { status: 'fail' };
  }
};

export const login = async (data, onLoad) => {
  try {
    const res = await api.post('/users/login', data);
    onLoad(res.data);
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

export const signup = async (data, onLoad) => {
  try {
    const res = await api.post('/users/signup', data);
    onLoad(res.data);
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

export const getme = async (onLoad) => {
  try {
    const res = await api.get('/users/getMe', getConfig());
    onLoad(res.data);
  } catch (err) {
    // toast.error(err.response.data.message);
  }
};

export const postReview = async (tourId, data, onPost) => {
  try {
    const res = await api.post(`/tours/${tourId}/reviews`, data, getConfig());
    toast.success('Review Successfully Posted!');
    onPost();
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

export const getPaymentInfo = async () => {
  console.log('inside');
  try {
    const res = await api.post('/razorpay');
    return res.data;
  } catch (err) {
    console.log(err);
    // toast.err(err.reaponse.data.message);
  }
};
