const defaultFetchStatus = {
  error: "",
  loading: false,
  emptyMessage: "There is nothing to show"
};

const fetchStatus = (state = defaultFetchStatus, action) => {
  switch (action.type) {
    case "SET_ERROR":
      return {
        error: action.error,
        loading: state.loading,
        emptyMessage: state.emptyMessage
      };
    case "SET_LODING":
      return {
        error: state.error,
        loading: action.loading,
        emptyMessage: state.emptyMessage
      };
    case "SET_EMPTY_MESSAGE":
      return {
        error: state.error,
        loading: state.loading,
        emptyMessage: action.emptyMessage
      };
    default:
      return state;
  }
};

export default fetchStatus;
