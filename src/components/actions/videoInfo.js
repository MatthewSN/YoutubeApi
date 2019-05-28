

export const addVideoInfo=({videoId}={})=>({
    type:"ADD_VIDEO_INFO",
    videoInfo:{
        videoId
    }
})

export const setVideoInfos=(videoInfos=[])=>({
    type:"SET_VIDEO_INFO",
    videoInfos
})



