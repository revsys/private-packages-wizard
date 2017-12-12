import { push } from 'react-router-redux';

export const goLogin = push.bind(undefined, '/login');
export const goAccount = push.bind(undefined, '/account');
export const goHome = push.bind(undefined, '/home');
