import * as actionType from '../action/actionType'

const initialState={
    question:true,
    message:false,
    like:false,
    notification:false,
    messageIcon:false,
    likeIcon:false,
    navigation:true,
    scrolledNavigation:false
}

const navigation=(state=initialState,action)=>{
    switch (action.type){
        case(actionType.OPEN_QUESTION):
            return{
                ...state,
                question:true,
                message:false,
                like:false
            }
        case(actionType.OPEN_MESSAGE):
            return{
                ...state,
                question:false,
                message:true,
                like:false
            }
        case(actionType.OPEN_LIKE):
            return{
                ...state,
                question:false,
                message:false,
                like:true
            }
        case(actionType.OPEN_NOTIFICATION):
            return{
                ...state,
                notification:!state.notification
            }
        case(actionType.CLOSE_NOTIFICATION):
            return{
                ...state,
                notification:false
            }
        case(actionType.OPEN_MESSAGE_ICON):
            return{
                ...state,
                messageIcon:!state.messageIcon
            }
        case(actionType.CLOSE_MESSAGE_ICON):
            return{
                ...state,
                messageIcon:false
            }
        case(actionType.OPEN_LIKE_ICON):
            return{
                ...state,
                likeIcon:!state.likeIcon
            }
        case(actionType.CLOSE_LIKE_ICON):
            return{
                ...state,
                likeIcon:false
            }
        case(actionType.SCROLL_UP):
            return{
                ...state,
                navigation:true,
                scrolledNavigation:false
            }
        case(actionType.SCROLL_DOWN):
            return{
                ...state,
                navigation:false,
                scrolledNavigation:true
            }
        default:
            return state
    }
}

export default navigation