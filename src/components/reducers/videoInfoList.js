
const videoListDefaultValue=[]

const videoInfos=(state=videoListDefaultValue,action)=>{
    
    switch(action.type){

        case "ADD_VIDEO_INFO":
          return [...state,action.videoInfo]
        case "SET_VIDEO_INFO":
          return action.videoInfos
        default:
        return state
    }
}


export default videoInfos