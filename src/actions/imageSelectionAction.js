import { IMAGE_SELECTED } from "./types";

export const imageSelected = (mName) => {
  return{
      type: IMAGE_SELECTED,
      payload: mName
  };
};
