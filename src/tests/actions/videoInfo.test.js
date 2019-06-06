import {setVideoInfos} from "../../actions/videoInfo"

test("test",()=>{
    const result = setVideoInfos([])
    expect(result).toEqual({
        type: "SET_VIDEO_INFO",
        videoInfos:expect.any(Array)
      })
})