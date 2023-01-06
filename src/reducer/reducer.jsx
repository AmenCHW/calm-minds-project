const initalState = {
  typBtn: '',
  paragraph: 'hogr',
};

const reducer = (state = initalState, action = {}) => {
  switch (action.type) {
    case 'subscribe':
      return state(
        'Thank you for your interest in working with Healing, we have recieved your application.You will receive an email guiding you for the next steps soon after your information is reviewed.'
      );

    default:
      break;
  }

  return state;
};

export default reducer;
