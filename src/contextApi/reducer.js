export const initialState = {
  user: null,
  userProfile: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_USER_PROFILE":
      return {
        ...state,
        userProfile: action.userProfile,
      };
    default:
      return state;
  }
}

export default reducer;
