import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://localhost:4000',
});

export enum endPoint {
  SIGNIN = '/users/signin',
  SIGNUP = '/users/signup',
  LOANS = '/loans',
}
