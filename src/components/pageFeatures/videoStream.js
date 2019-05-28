import React from "react";

const VideoStream = ({
  videoId,
  playStatus,
  onVideoClose,
  isFullScreen,
  onButtonResize,
  title
}) => {
  const streamType = isFullScreen ? "stream" : "stream__1";
  const iconResize = isFullScreen
    ? decodeURI("&#128469;")
    : decodeURI("&#128470;");
  console.log(streamType, isFullScreen);
  return (
    <React.Fragment>
      {playStatus && (
        <div className={streamType}>
          <button onClick={onVideoClose} className={`${streamType}--close`}>
            &#9932;
          </button>
          <button onClick={onButtonResize} className={`${streamType}--min-max`}>
            &#128470;
          </button>
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
        </div>
      )}
    </React.Fragment>
  );
};

export default VideoStream;
