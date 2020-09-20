import * as actionType from './actionType'

export const openQuestion=()=>{
    return{
        type:actionType.OPEN_QUESTION
    }
}

export const openMessage=()=>{
    return{
        type:actionType.OPEN_MESSAGE
    }
}

export const openLike=()=>{
    return{
        type:actionType.OPEN_LIKE
    }
}

export const openNotification=()=>{
    return{
        type:actionType.OPEN_NOTIFICATION
    }
}

export const closeNotification=()=>{
    return{
        type:actionType.CLOSE_NOTIFICATION
    }
}

export const openMessageIcon=()=>{
    return{
        type:actionType.OPEN_MESSAGE_ICON
    }
}

export const closeMessageIcon=()=>{
    return{
        type:actionType.CLOSE_MESSAGE_ICON
    }
}

export const openLikeIcon=()=>{
    return{
        type:actionType.OPEN_LIKE_ICON
    }
}

export const closeLikeIcon=()=>{
    return{
        type:actionType.CLOSE_LIKE_ICON
    }
}

export const scrollUp=()=>{
    return{
        type:actionType.SCROLL_UP
    }
}

export const scrollDown=()=>{
    return{
        type:actionType.SCROLL_DOWN
    }
}