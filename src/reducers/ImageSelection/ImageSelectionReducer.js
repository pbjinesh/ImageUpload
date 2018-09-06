const initialState = {
  email: ""
};

const ImageSelectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "IMAGE_SELECTED":
      return { ...state, email: action.payload };

    default:
      return state;
  }
};

export default ImageSelectionReducer;
