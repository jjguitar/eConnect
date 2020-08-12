const reducer = (state, action) => {
  switch (action.type) {
    case 'SEND_INFO':
      return {
        ...state,
        userInfo: action.payload,
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
