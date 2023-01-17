import { chanage_typeBtn } from './actionTypes';

const initalState = {
  typBtn: '',
  paragraph: 'hogr',
};

const reducer = (state = initalState, action = {}) => {
  switch (action.type) {
    case chanage_typeBtn:
      return {
        ...state,
        paragraph: action.payload,
      };

    default:
      break;
  }

  return state;
};

export default reducer;
