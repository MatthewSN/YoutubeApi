import {createStore,combineReducers} from "redux"
import videoInfos from "../reducers/videoInfoList"


const configureStore=()=>{
    const store=createStore(
        combineReducers({
            videoInfos
        })
    )

    return store
}

export default configureStore