import { Route, BrowserRouter } from "react-router-dom";
import VideoList from "../pages/videoList";
import WatchVideo from "../pages/watchVideo";
import React from "react";
import { connect } from "react-redux";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={VideoList} exact={true} />
      <Route path="/watch:id" component={WatchVideo} exact={true} />
    </div>
  </BrowserRouter>
);

export default connect()(AppRouter);
