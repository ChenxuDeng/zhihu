import * as actionType from './actionType'

export const openFullArticle=()=>{
    return{
        type:actionType.OPEN_FULL_ARTICLE
    }
}

export const closeFullArticle=()=>{
    return{
        type:actionType.CLOSE_FULL_ARTICLE
    }
}

export const openDummyArticle=()=>{
    return{
        type:actionType.OPEN_DUMMY_ARTICLE
    }
}

export const closeDummyArticle=()=>{
    return{
        type:actionType.CLOSE_DUMMY_ARTICLE
    }
}

export const agree=()=>{
    return{
        type:actionType.AGREE
    }
}

export const disagree=()=>{
    return{
        type:actionType.DISAGREE
    }
}

export const dummyAgree=()=>{
    return{
        type:actionType.DUMMY_AGREE
    }
}

export const dummyDisagree=()=>{
    return{
        type:actionType.DUMMY_DISAGREE
    }
}

export const recommendOnClick=()=>{
    return{
        type:actionType.RECOMMEND_ONCLICK
    }
}

export const subscribedOnClick=()=>{
    return{
        type:actionType.SUBSCRIBED_ONCLICK
    }
}

export const trendingOnClick=()=>{
    return{
        type:actionType.TRENDING_ONCLICK
    }
}

export const sideBarShow=()=>{
    return{
        type:actionType.SIDE_BAR_SHOW
    }
}

export const sideBarHide=()=>{
    return{
        type:actionType.SIDE_BAR_HIDE
    }
}