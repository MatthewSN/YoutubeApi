import { setError, setLoading, setEmptyMessage } from "./fetchStatus";

export const addVideoInfo = ({ videoId } = {}) => ({
  type: "ADD_VIDEO_INFO",
  videoInfo: {
    videoId
  }
});

export const setVideoInfos = (videoInfos = []) => ({
  type: "SET_VIDEO_INFO",
  videoInfos
});

export const fetchData = (q, maxResult = 10, part = "snippet") => {
 
  const request = fetch(
    `https://www.googleapis.com/youtube/v3/search?part=${part}&key=AIzaSyCRfi-G0JICG9dzAAIk0CauaIV6d6XWfrQ&q=${q}&maxResults=${maxResult}`
  );
  return dispatch => {
    dispatch(setLoading(true));
    request
      .then(data => {
        return data.json();
      })
      .then(({ items }) => {
        dispatch(setLoading(false));
        if (items.length === 0) {
          dispatch(setError());
          dispatch(setEmptyMessage("There is nothing to show"));
        } else dispatch(setEmptyMessage());

        const videoInfos = items.map((info, index) => {
          const { url } = info.snippet.thumbnails.high;
          const { title } = info.snippet;
          const { videoId } = info.id;
          return {
            url,
            title,
            videoId
          };
        });
        dispatch(setVideoInfos(videoInfos));
      })
      .catch(err => {
        dispatch(setLoading(false));
        dispatch(setError("Your connection is lost"));
      });
  };
};
