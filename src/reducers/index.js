import { combineReducers } from "redux";

import ImageSelectionReducer from "./ImageSelection/ImageSelectionReducer";

export default combineReducers({
    imgs: ImageSelectionReducer,
});
