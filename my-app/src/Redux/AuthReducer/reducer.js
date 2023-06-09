import { USER_AUTH_STATUS, USER_LOGOUT } from "./actionTypes";

let initial = {
  isAuth: JSON.parse(localStorage.getItem("isAuth")) || false,
  name: localStorage.getItem("name") || "",
};
export let reducer = (state = initial, { type, payload }) => {
  switch (type) {
    case USER_AUTH_STATUS:
      return { ...state, isAuth: true };
    case "USER_NAME_STATUS": {
      return { ...state, name: payload };
    }
    case USER_LOGOUT : {
      return {...state, isAuth: false, name: ""}
    }
    default:
      return state;
  }
};
