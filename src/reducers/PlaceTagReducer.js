import { PLACES_TAG_ADD } from "../actions/types";
import { PLACES_TAGGED_REMOVE } from "../actions/types";

const INITIAL_STATE = {
  placetag: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLACES_TAG_ADD:
      return {
        ...state,
        placetag: [...state.placetag, action.payload]
      };
      case PLACES_TAGGED_REMOVE:
      return {
        placetag: [
          ...state.placetag.slice(0, action.pid),
          ...state.placetag.slice(action.pid + 1)
      ],
       
      };

    default:
      return state;
  }
};
