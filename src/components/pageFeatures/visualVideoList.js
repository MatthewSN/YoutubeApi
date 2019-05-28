import React from "react";
import { connect } from "react-redux";
import VideoOverView from "./videoOverView";
import uuid from "uuid";
import VideoStream from "./videoStream";
class VisualVideoList extends React.Component {
  state = {
    playStatus: false,
    videoId: "",
    isFullScreen: true,
    videoTitle:""
  };

  onVideoPlay = (videoId,videoTitle) => {
    this.setState(() =>
     ({ playStatus: true,
       videoId,
       videoTitle,
       isFullScreen:true
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
  render() {
    return (
      <div className="search-result">
        {this.props.videoInfos.length > 0 &&
          !this.props.videoInfos[0].error && 
          this.props.videoInfos.map((item, index) => {
            const { url } = item.snippet.thumbnails.high;
            const { title } = item.snippet;
            const { videoId } = item.id;
            
            return (
              <VideoOverView
                key={uuid()}
                onVideoPlay={this.onVideoPlay}
                videoId={videoId}
                title={title}
                url={url}
              />
            );
          })}

          {this.props.videoInfos.length==1
            && this.props.videoInfos[0].error && 
            <h1 className="search-result--error">{this.props.videoInfos[0].error}</h1> }

            {this.props.videoInfos.length==0 && 
              <h1 className="search-result--error">There is nothing to show</h1>
            }

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
    videoInfos: state.videoInfos
  };
};

export default connect(mapStateToProps)(VisualVideoList);
