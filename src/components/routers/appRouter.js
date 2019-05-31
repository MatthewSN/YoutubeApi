import { Route, BrowserRouter } from "react-router-dom";
import VideoList from "../pages/videoList";
import React from "react";
import { connect } from "react-redux";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={VideoList} exact={true} />
    </div>
  </BrowserRouter>
);

export default connect()(AppRouter);
