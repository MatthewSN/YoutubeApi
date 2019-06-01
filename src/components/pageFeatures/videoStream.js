import React from "react";

const getBtnsEl = (onVideoClose, onButtonResize, streamType) => (
  <React.Fragment>
    <button onClick={onVideoClose} className={`${streamType}--close`}>
      &#9932;
    </button>
    <button onClick={onButtonResize} className={`${streamType}--min-max`}>
      &#128470;
    </button>
  </React.Fragment>
);

const getIframeEl = (playStatus, streamType, videoId, title) =>
  playStatus && (
    <React.Fragment>
      <div className={`${streamType}--container`}>
        {" "}
        <div className={`${streamType}--wrap`}>
          <iframe
            className={`${streamType}--video`}
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer;
              autoplay;
              encrypted-media;
              gyroscope;
              picture-in-picture"
            allowFullScreen
          />
        </div>
        {title && <h1 className={`${streamType}--title`}>{title}</h1>}
      </div>
    </React.Fragment>
  );

const VideoStream = ({
  videoId,
  playStatus,
  onVideoClose,
  isFullScreen,
  onButtonResize,
  title
}) => {
  const streamType = isFullScreen ? "stream" : "stream__1";

  return (
    <React.Fragment>
      {playStatus && (
        <div className={streamType}>
          {getBtnsEl(onVideoClose, onButtonResize, streamType)}
          {getIframeEl(playStatus, streamType, videoId, title)}
        </div>
      )}
    </React.Fragment>
  );
};

export default VideoStream;
