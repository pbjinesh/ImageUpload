import { IMAGE_SELECTED } from "./types";

export const imageSelected = selectedImgArray => {
  return {
    type: IMAGE_SELECTED,
    payload: selectedImgArray
  };
};
