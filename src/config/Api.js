import axios from 'axios';
import { AUTH_TOKEN_KEY } from '../App.jsx';

export const Api = axios.create({
   baseURL: 'http://localhost:8080',
});

Api.interceptors.request.use(
   function (request) {
      if(localStorage.getItem(AUTH_TOKEN_KEY) !== null){
         const token = JSON.parse(
            localStorage.getItem(AUTH_TOKEN_KEY)
         ).accessToken;
         if (token) {
            request.headers.Authorization = token;
         }
      }
      return request;
   },
   (error) => {
      return Promise.reject(error);
   }
);
