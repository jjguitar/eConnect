/* eslint-disable import/prefer-default-export */
export const sendInfo = (payload) => ({
  type: 'SEND_INFO',
  payload,
});

export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});