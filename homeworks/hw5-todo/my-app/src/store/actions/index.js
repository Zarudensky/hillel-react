export const ADD_ACTION = 'ACTION/ADD';
export function add(value) {
  return {
    type: ADD_ACTION,
    payload: value,
  };
}
export const TOGGLE_ACTION = 'ACTION/TOGGLE';
export function toggle(value) {
  return {
    type: TOGGLE_ACTION,
    payload: value,
  };
}
export const SET_TITLE_ACTION = 'ACTION/SET_TITLE';
export function setTitle(title) {
  return {
    type: SET_TITLE_ACTION,
    payload: title,
  };
}
