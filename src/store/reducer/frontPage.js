import * as actionType from '../action/actionType'

const initialState={
    fullArticle:false,
    dummyArticle:false,
    agree:false,
    disagree:false,
    dummyAgree:false,
    dummyDisagree:false
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
        case(actionType.OPEN_DUMMY_ARTICLE):
            return{
                ...state,
                dummyArticle:true
            }
        case(actionType.CLOSE_DUMMY_ARTICLE):
            return{
                ...state,
                dummyArticle:false
            }
        case(actionType.AGREE):
            return{
                ...state,
                agree:!state.agree,
                disagree:false
            }
        case(actionType.DISAGREE):
            return{
                ...state,
                disagree:!state.disagree,
                agree:false
            }
        case(actionType.DUMMY_AGREE):
            return{
                ...state,
                dummyAgree:!state.dummyAgree,
                dummyDisagree:false
            }
        case(actionType.DUMMY_DISAGREE):
            return{
                ...state,
                dummyDisagree:!state.dummyDisagree,
                dummyAgree:false
            }
        default:
            return state
    }
}

export default frontPage