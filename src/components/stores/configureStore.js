import { createStore, combineReducers, applyMiddleware } from "redux";
import videoInfos from "../reducers/videoInfoList";
import thunk from "redux-thunk";

const configureStore = middleware => {
  const store = createStore(
    combineReducers({
      videoInfos
    }),
    applyMiddleware(thunk)
  );

  return store;
};

export default configureStore;
