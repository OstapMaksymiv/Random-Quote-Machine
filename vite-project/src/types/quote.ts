export enum QuoteActionTypes {
    FETCH_QUOTES = 'FETCH_QUOTES',
    FETCH_QUOTES_SUCCESS = 'FETCH_QUOTES_SUCCESS',
    FETCH_QUOTES_ERROR = 'FETCH_QUOTES_ERROR',
    CHOOSE_QUOTES = 'CHOOSE_QUOTES'
}
export interface Quote {
    quote:string,
    author:string

}
export interface QuoteState{
    quotes:Quote[],
    loading:boolean,
    error: null | string,
    quotNumber:number
}
interface FetchQuotesAction{
    type: QuoteActionTypes.FETCH_QUOTES
}
interface FetchQuotesSuccessAction{
    type: QuoteActionTypes.FETCH_QUOTES_SUCCESS,
    payload:Quote[]
}
interface FetchQuotesErrorAction{
    type: QuoteActionTypes.FETCH_QUOTES_ERROR,
    payload:string
}
interface ChooseQuotesAction{
    type: QuoteActionTypes.CHOOSE_QUOTES,
    payload: number
}
export type QuoteAction = FetchQuotesAction | FetchQuotesSuccessAction | FetchQuotesErrorAction | ChooseQuotesAction