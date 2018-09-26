import { combineReducers } from "redux";
import ImageReducer from "./ImageReducer";
import TagFriendReducer from "./TagFriendReducer";
import PlaceTagReducer from "./PlaceTagReducer";
export default combineReducers({
  imgs: ImageReducer,
  tags: TagFriendReducer,
  places: PlaceTagReducer,

});
