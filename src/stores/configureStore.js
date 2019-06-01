import { createStore, combineReducers, applyMiddleware } from "redux";
import videoInfos from "../components/reducers/videoInfoList";
import fetchStatus from "../components/reducers/fetchStatus"
import thunk from "redux-thunk";

const configureStore = middleware => {
  const store = createStore(
    combineReducers({
      videoInfos,
      fetchStatus
    }),
    applyMiddleware(thunk)
  );

  return store;
};

export default configureStore;
