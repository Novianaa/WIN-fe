import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginRequest = () => {
  return {
    type: "LOGIN_REQUEST",
  };
};

const LoginSuccess = (data) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: data
  };
};

const LoginError = (error) => {
  return {
    type: "LOGIN_ERROR",
    payload: error
  };
};

export const AuthLogin = (formData) => {
  return (dispatch) => {

    dispatch(LoginRequest())
    axios({
      method: "POST",
      url: `https://test-win-be.vercel.app/api/v1/auth/login`,
      data: {
        email: formData.email,
        password: formData.password,
      }
    })
      .then((res) => {
        dispatch(LoginSuccess(res.data.data))
      }).catch((err) => {
        dispatch(LoginError(err.response.data))
        toast.error(err.response.data.msg)
      })
  }
};

export const AuthLogout = () => {
  return {
    type: "AUTH_LOGOUT",
  };
};