import fetchStatus from "../../reducers/fetchStatus";

test("should set the error on state", () => {
  const currState = {
    error: "",
    loading: false,
    emptyMessage: "There is nothing to show"
  };
  const action = {
    type: "SET_ERROR",
    error: "this is the error now"
  };
  const state = fetchStatus(currState, action);
  expect(state.error).toBe("this is the error now");
});
