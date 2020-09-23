import * as actionType from './actionType'
import axios from 'axios'

export const fetchQuestionStart=()=>{
    return{
        type:actionType.FETCH_QUESTION_START
    }
}

export const fetchQuestionSuccess=(questionData)=>{
    return{
        type:actionType.FETCH_QUESTION_SUCCESS,
        questionData:questionData
    }
}

export const fetchQuestionFailed=()=>{
    return{
        type:actionType.FETCH_QUESTION_FAILED
    }
}

export const fetchQuestion=()=>{
    return (dispatch)=>{
        dispatch(fetchQuestionStart())
        axios.get('https://zhihu-51aa8.firebaseio.com/questions.json').then((response)=>{
            let questions=[]
            for(let key in response.data){
                questions.push({
                    id:key,
                    ...response.data[key]
                })
            }
            dispatch(fetchQuestionSuccess(questions))
        }).catch((error)=>{
            dispatch(fetchQuestionFailed())
        })
    }
}

export const deleteQuestion=(index)=>{
    return{
        type:actionType.DELETE_QUESTION,
        index:index
    }
}