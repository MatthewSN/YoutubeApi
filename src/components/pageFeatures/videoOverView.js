import React from "react";

class VideoOverView extends React.Component {

  getImageEl = () => {
    return (
      this.props.url && (
        <div
          className="search-result--img-container"
          onClick={() => {
            this.props.onVideoPlay(this.props.videoId, this.props.title);
          }}
        >
          <img className="search-result--img" src={this.props.url} />
          <div className="search-result--info">
            <h2 className="search-result--full-title">{this.props.title}</h2>
          </div>
        </div>
      )
    );
  };
  getVideoTitleEl = () => {
    const { title } = this.props;
    return title && <h2 className="search-result--title">{title}</h2>;
  };
  render() {
    return (
      <div className="search-result--item-container">
        {this.getImageEl()}
        {this.getVideoTitleEl()}
  
      </div>
    );
  }
}

export default VideoOverView;
