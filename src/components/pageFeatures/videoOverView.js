import React from "react";

class VideoOverView extends React.Component {
  render() {
    return (
      <div className="search-result--item-container">
        {this.props.url && (
          <div
            className="search-result--img-container"
            onClick={() => {
              this.props.onVideoPlay(this.props.videoId, this.props.title);
            }}
          >
            {" "}
            <img className="search-result--img" src={this.props.url} />{" "}
            <div className="search-result--info">
              <h2 className="search-result--full-title">{this.props.title}</h2>
            </div>
          </div>
        )}
        {this.props.title && (
          <h2 className="search-result--title">{this.props.title}</h2>
        )}
      </div>
    );
  }
}

export default VideoOverView;
