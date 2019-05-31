import React from "react";
import { connect } from "react-redux";
import VideoOverView from "./videoOverView";
import VideoStream from "./videoStream";
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
  searchResulsEl = () => {
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
  errorEl = () => {
    const { error } = this.props;
    return error && <h1 className="search-result--error">{error}</h1>;
  };

  emptyMessageEl = () => {
    const { emptyMessage } = this.props;
    console.log(emptyMessage);
    return (
      emptyMessage && <h1 className="search-result--error">{emptyMessage}</h1>
    );
  };
  render() {
    return (
      <div className="search-result">
        {this.searchResulsEl()}
        {this.emptyMessageEl()}
        {this.errorEl()}

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
    emptyMessage: state.fetchStatus.emptyMessage
  };
};

export default connect(mapStateToProps)(VisualVideoList);
