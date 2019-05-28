import React from "react";
import SearchForm from "../pageFeatures/searchForm";
import searchQuery from "../youtubeApi/searchRequest";
import { setVideoInfos } from "../actions/videoInfo";
import { connect } from "react-redux";
import VisualVideoList from "../pageFeatures/visualVideoList";

const VideoList = props => (
  <div>
    <SearchForm
      onSubmit={query => {
        searchQuery(query, "AIzaSyCRfi-G0JICG9dzAAIk0CauaIV6d6XWfrQ", 20)
          .then(({ items }) => {
            props.dispatch(setVideoInfos(items));
          })
          .catch(err => {
            props.dispatch(
              setVideoInfos([{ error: "Your connection is failled!" }])
            );
          });
      }}
    />

    <VisualVideoList />
  </div>
);
const mapStateToProps = state => ({
  snippet: state.snippet
});

export default connect(mapStateToProps)(VideoList);