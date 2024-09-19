import { QuoteAction, QuoteActionTypes, QuoteState } from "../../types/quote"

const initialState:QuoteState = {
    quotes:[],
    loading:false,
    error:null,
    quotNumber:Math.floor(Math.random() * 30)
}
export const QuoteReducer = (state:QuoteState = initialState, action: QuoteAction): QuoteState   => {
    switch(action.type){
        case QuoteActionTypes.FETCH_QUOTES:
            return {...state,loading:true, error:null, quotes:[] }
        case QuoteActionTypes.FETCH_QUOTES_SUCCESS:
            return {...state, loading:false, error:null, quotes:action.payload}
        case QuoteActionTypes.FETCH_QUOTES_ERROR:
            return {...state, loading:false, error:action.payload, quotes:[]}
        case QuoteActionTypes.CHOOSE_QUOTES:
            return {...state, loading:false, error:null,quotNumber: state.quotNumber === action.payload && action.payload === 30 ? action.payload - 1 : action.payload + 1 }
        default:
            return state
    }
}