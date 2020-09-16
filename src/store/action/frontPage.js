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