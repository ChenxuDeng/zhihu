import * as actionType from '../action/actionType'

const initialState={
    questions:null,
    loading:false,
    error:false
}

const questionData=(state=initialState,action)=>{
    const index=action.index
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
        case(actionType.DELETE_QUESTION):
                return{
                    ...state,
                    questions:state.questions.filter((item,i)=>index!==i)
                }
        default:
            return state
    }
}

export default questionData

