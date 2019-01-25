export const FETCH_LOCAL_USER = localStorage.getItem("currentLoggedInUser");

export const SET_LOCAL_USER = (user) => {
  localStorage.setItem("currentLoggedInUser", user);
}
