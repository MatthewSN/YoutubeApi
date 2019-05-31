import React from "react";

class VideoOverView extends React.Component {

  
  showInfo=()=>{
    return this.props.url && (
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
  }
  render() {
    return (
      <div className="search-result--item-container">
        {this.showInfo()}
        {this.props.title && (
          <h2 className="search-result--title">{this.props.title}</h2>
        )}
      </div>
    );
  }
}

export default VideoOverView;
