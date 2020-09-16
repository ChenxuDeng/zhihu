import * as actionType from '../action/actionType'

const initialState={
    fullArticle:false
}

const frontPage=(state=initialState,action)=>{
    switch(action.type){
        case(actionType.OPEN_FULL_ARTICLE):
            return{
                ...state,
                fullArticle:true
            }
        case(actionType.CLOSE_FULL_ARTICLE):
            return{
                ...state,
                fullArticle:false
            }
        default:
            return state
    }
}

export default frontPage