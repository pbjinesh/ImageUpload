import { IMAGE_SELECTED } from "../actions/types";

const INITIAL_STATE = {
  selected: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IMAGE_SELECTED:
      return { ...state, selected: action.payload };

    default:
      return state;
  }
};
