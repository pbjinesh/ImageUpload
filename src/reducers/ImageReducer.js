import { IMAGE_SELECTED } from "../actions/types";

const INITIAL_STATE = {
  email: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IMAGE_SELECTED:
      return { ...state, email: action.payload };

    default:
      return state;
  }
};
