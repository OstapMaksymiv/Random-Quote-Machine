import axios from "axios"
import { QuoteAction, QuoteActionTypes } from "../../types/quote"
import { Dispatch } from "@reduxjs/toolkit";


export const fetchQuotes = () => {
    return async (dispatch:Dispatch<QuoteAction>) => {
        try {
            dispatch({type:QuoteActionTypes.FETCH_QUOTES})
            const response = await axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            dispatch({
                type:QuoteActionTypes.FETCH_QUOTES_SUCCESS,
                payload: response.data.quotes
            })
        } catch (error) {
            dispatch({
                type:QuoteActionTypes.FETCH_QUOTES_ERROR,
                payload: `${error}`
            })
        }
    }
}

export const randomQuot = (quotesLength: number) => {
    const randomNumber = Math.floor(Math.random() * quotesLength)
    return {
        type:QuoteActionTypes.CHOOSE_QUOTES,
        payload:randomNumber
    }
}