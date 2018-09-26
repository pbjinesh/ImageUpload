import { FRIENDS_TAG_ADD } from "../actions/types";
import { FRIENDS_TAGGED_REMOVE } from "../actions/types";
import { FRIENDS_TAGGED_REMOVE_BY_ID } from "../actions/types";

const INITIAL_STATE = {
  tagged: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FRIENDS_TAG_ADD:
      return {
        ...state,
        tagged: [...state.tagged, action.payload]
      };
    case FRIENDS_TAGGED_REMOVE:
      return {
        tagged: [
          ...state.tagged.slice(0, action.pid),
          ...state.tagged.slice(action.pid + 1)
        ]
      };

    case FRIENDS_TAGGED_REMOVE_BY_ID: {
      const listitems = state.tagged.filter(item => item.pid !== action.pid);
      console.log("FRIENDS_TAGGED_REMOVE_BY_ID", listitems);
      return {
        tagged: listitems
      };
    }

    default:
      return state;
  }
};
