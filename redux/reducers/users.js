const initialState = {
  user: {},
  loadUser: false,
  errorUser: false,
  errorUserMessage: "",

  all: [],
  loadAll: false,
  errorAll: false,
  errorAllMessage: "",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_PENDING":
      return { ...state, loadUser: true };
    case "GET_USER_FULFILLED":
      return { ...state, loadUser: false, user: action.payload };
    case "GET_USER_REJECTED":
      return {
        ...state,
        loadUser: false,
        errorUser: true,
        errorUserMessage: action.payload,
      };

    case "GET_ALL_PENDING":
      return { ...state, loadAll: true };
    case "GET_ALL_FULFILLED":
      return { ...state, loadAll: false, all: action.payload };
    case "GET_ALL_REJECTED":
      return {
        ...state,
        loadAll: false,
        errorAll: true,
        errorAllMessage: action.payload,
      };
      
    default:
      return state;
  }
};
export default usersReducer;
