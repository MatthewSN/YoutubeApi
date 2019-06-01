import React from "react";
import { connect } from "react-redux";
import VideoOverView from "./VideoOverView";
import VideoStream from "./VideoStream";
import Loader from "react-loader-spinner";
class VisualVideoList extends React.Component {
  state = {
    playStatus: false,
    videoId: "",
    isFullScreen: true,
    videoTitle: ""
  };

  onVideoPlay = (videoId, videoTitle) => {
    this.setState(() => ({
      playStatus: true,
      videoId,
      videoTitle,
      isFullScreen: true
    }));
  };
  onVideoClose = () => {
    this.setState(() => ({ playStatus: false }));
  };
  onButtonResize = () => {
    if (this.state.isFullScreen) {
      this.setState(() => ({ isFullScreen: false }));
    } else {
      this.setState(() => ({ isFullScreen: true }));
    }
  };
  getSearchResulsEl = () => {
    const { videoInfos, error, emptyMessage } = this.props;

    return (
      !error &&
      !emptyMessage &&
      videoInfos.map((item, index) => {
        const { url, title, videoId } = item;

        return (
          <VideoOverView
            key={videoId}
            onVideoPlay={this.onVideoPlay}
            videoId={videoId}
            title={title}
            url={url}
          />
        );
      })
    );
  };
  getErrorEl = () => {
    const { error } = this.props;
    return error && <h1 className="search-result--error">{error}</h1>;
  };
  getEmptyMessageEl = () => {
    const { emptyMessage } = this.props;
    console.log(emptyMessage);
    return (
      emptyMessage && <h1 className="search-result--error">{emptyMessage}</h1>
    );
  };

  getLoadingEl = () => {
    const loading = this.props.loading;
    return (
      loading && (
        <div class="loader">
          <Loader type="Puff" color="#00BFFF" height="100" width="100" />
        </div>
      )
    );
  };
  render() {
    return (
      <div className="search-result">
        {this.getSearchResulsEl()}
        {this.getEmptyMessageEl()}
        {this.getErrorEl()}
        {this.getLoadingEl()}
        <VideoStream
          title={this.state.videoTitle}
          isFullScreen={this.state.isFullScreen}
          onButtonResize={this.onButtonResize}
          playStatus={this.state.playStatus}
          videoId={this.state.videoId}
          onVideoClose={this.onVideoClose}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    videoInfos: state.videoInfos,
    error: state.fetchStatus.error,
    emptyMessage: state.fetchStatus.emptyMessage,
    loading: state.fetchStatus.loading
  };
};

export default connect(mapStateToProps)(VisualVideoList);
