import * as actionType from '../action/actionType'

const initialState={
    questions:null,
    loading:false,
    error:false
}

const questionData=(state=initialState,action)=>{
    switch(action.type){
        case(actionType.FETCH_QUESTION_START):
            return{
                ...state,
                loading:true
            }
        case(actionType.FETCH_QUESTION_SUCCESS):
            return{
                ...state,
                loading:false,
                questions:action.questionData
            }
        case(actionType.FETCH_QUESTION_FAILED):
            return{
                ...state,
                loading:false,
                error:true
            }
        default:
            return state
    }
}

export default questionData

