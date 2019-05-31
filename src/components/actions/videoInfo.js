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
    dispatch({ type: "FETCH_DATA" });
    request
      .then(data => {
        return data.json();
      })
      .then(({ items }) => {
        console.log(items)
        dispatch(setVideoInfos(items));
      })
      .catch(err => {});
  };
};




