import { FRIENDS_TAG_ADD } from "./types";
import { FRIENDS_TAGGED_REMOVE } from "./types";
import { PLACES_TAG_ADD } from "./types";
import { PLACES_TAGGED_REMOVE } from "./types";
import { FRIENDS_TAGGED_REMOVE_BY_ID } from "./types";

export const tagFriendAction = taggedFriendList => {
  return {
    type: FRIENDS_TAG_ADD,
    payload: taggedFriendList
  };
};

export const tagFriendRemoveAction = (taggedFriendRemoveList, pid) => {
  return {
    type: FRIENDS_TAGGED_REMOVE,
    payload: taggedFriendRemoveList,
    pid: pid
  };
};

export const tagPlaceAction = taggedPlaceList => {
  return {
    type: PLACES_TAG_ADD,
    payload: taggedPlaceList
  };
};

export const tagPlaceRemoveAction = (taggedPlaceRemoveList, pid) => {
  return {
    type: PLACES_TAGGED_REMOVE,
    payload: taggedPlaceRemoveList,
    pid: pid
  };
};

export const taggedFriendsRemovebyId = (taggedFriendsbyId, pid) => {
  return {
    type: FRIENDS_TAGGED_REMOVE_BY_ID,
    payload: taggedFriendsbyId,
    pid: pid
  };
};
